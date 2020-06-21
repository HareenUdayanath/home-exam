import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResultCalculationHelperService } from '../../../services/helpers/result-calculation-helper/result-calculation-helper.service';
import { ClassServiceHandlerService } from '../../../services/service-handler/class-service-handler/class-service-handler.service';
import { BarChartElement } from '../../../shared/components/bar-chart/bar-chart-element.model';
import { ActivityModel } from '../../../shared/models/class/activity.model';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';
import { ClassModel } from '../../../shared/models/class/class.model';
import { Constant } from '../../../shared/models/constant';
import { DateRangeFilterPipe } from '../../../shared/pipes/date-range-filter/date-range-filter.pipe';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']

})
export class ResultsComponent implements OnInit {

  public monthsString = Constant.MONTHS_STRINGS;

  public classes: Array<ClassModel>;
  public attemptResults: Array<AttemptResultModel>;

  // Filter references
  public selectedClass: ClassModel;
  public selectedStudent = '';
  public fromDate: Date;
  public toDate: Date;

  public allDummyClass: ClassModel;
  public allDummyClassName = 'All';

  // Map maintaining classed for relevant students
  public studentClass: Map<string, string>;
  // Map maintaining results for relevant classes
  public classResults: Map<string, Array<AttemptResultModel>>;

  public summary: Array<BarChartElement>;

  // Tracker is used to do operation which should be performed after all data are loaded
  // In this case there are two data sources to be loaded
  private dataTracker = new BehaviorSubject<number>(0);

  constructor(
    private classServiceHandler: ClassServiceHandlerService,
    private resultCalculator: ResultCalculationHelperService,
    private dateRangeFilter: DateRangeFilterPipe
  ) {
  }

  ngOnInit(): void {
    this.attemptResults = [];
    this.classResults = new Map<string, Array<AttemptResultModel>>();
    this.studentClass = new Map<string, string>();

    // Dummy class room to represent all class room option
    this.allDummyClass = new ClassModel();
    this.allDummyClass.name = this.allDummyClassName;
    this.selectedClass = this.allDummyClass;

    this.loadClasses();
    this.loadActivities();
    this.setSummary();

    this.dataTracker.subscribe(count => {
      if (count === 2) {
        this.prepareClassResults();
      }
    });

  }

  loadClasses() {
    this.classServiceHandler.getClasses().subscribe(classes => {
      this.classes = classes;
      this.classes.forEach(classRoom => {
        classRoom.students.forEach(student => {
          this.studentClass.set(student, classRoom.name);
        });
      });

      this.classes.unshift(this.allDummyClass); // putting all class option
      this.dataTracker.next(this.dataTracker.getValue() + 1);
    });
  }

  loadActivities() {
    this.classServiceHandler.getActivities().subscribe(activities => {
      this.prepareActivities(activities);
    });
  }

  /**
   * Setup Attempts results from activities
   */
  prepareActivities(activities: Array<ActivityModel>) {
    activities.forEach(activity => {
      const newResults = this.resultCalculator.getResultsFromActivity(activity);
      this.attemptResults = this.attemptResults.concat(newResults);
    });
    this.dataTracker.next(this.dataTracker.getValue() + 1);
  }

  /**
   * Setting summary elements need for the summary bar chart
   */
  setSummary() {
    // Filter using class
    let filteredResults = this.classResults.get(this.selectedClass.name);
    // Filter using date range
    filteredResults = this.dateRangeFilter.transform(filteredResults, this.fromDate, this.toDate);
    this.summary = this.resultCalculator.getSummary(filteredResults);
  }

  /**
   * Class wise results mapping
   */
  prepareClassResults() {

    this.classResults.set(this.allDummyClassName, this.attemptResults); // For all class option

    this.attemptResults.forEach(attemptResult => {
      const className = this.studentClass.get(attemptResult.student);
      if (!this.classResults.has(className)) {
        this.classResults.set(className, []);
      }
      this.classResults.get(className).push(attemptResult);
    });
    this.setSummary();
  }

}

