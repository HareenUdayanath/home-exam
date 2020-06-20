import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResultCalculationHelperService } from '../../../services/helpers/result-calculation-helper/result-calculation-helper.service';
import { ClassServiceHandlerService } from '../../../services/service-handler/class-service-handler/class-service-handler.service';
import { BarChartElement } from '../../../shared/components/bar-chart/bar-chart-element.model';
import { ActivityModel } from '../../../shared/models/class/activity.model';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';
import { ClassModel } from '../../../shared/models/class/class.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']

})
export class ResultsComponent implements OnInit {

  monthsString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  classes: Array<ClassModel>;
  attemptResults: Array<AttemptResultModel>;

  // Filter references
  public selectedClass: ClassModel;
  public selectedStudent = '';
  public fromDate: Date;
  public toDate: Date;

  public allDummyClass: ClassModel;
  public allDummyClassName = 'ALL';

  public studentClass: Map<string, string>;
  public classResults: Map<string, Array<AttemptResultModel>>;

  public summary: Array<BarChartElement>;

  private dataTracker = new BehaviorSubject<number>(0);

  constructor(
    private classServiceHandler: ClassServiceHandlerService,
    private resultCalculator: ResultCalculationHelperService
  ) {
    this.summary = [
      {
        title: 'Unassigned',
        percentage: 16,
        color: '#D8D8D8',
        width: 0
      },
      {
        title: 'Weak',
        percentage: 18,
        color: '#B40404',
        width: 0
      },
      {
        title: 'OK',
        percentage: 35,
        color: '#FF8000',
        width: 0
      },
      {
        title: 'Excellent',
        percentage: 28,
        color: '#01DF01',
        width: 0
      }
    ];
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
      this.dataTracker.next(this.dataTracker.getValue() + 1);
    });
  }

  loadActivities() {
    this.classServiceHandler.getActivities().subscribe(activities => {
      this.prepareActivities(activities);
    });
  }

  prepareActivities(activities: ActivityModel[]) {
    activities.forEach(activity => {
      const newResults = this.resultCalculator.getResultsFromActivity(activity);
      this.attemptResults = this.attemptResults.concat(newResults);
    });
    this.dataTracker.next(this.dataTracker.getValue() + 1);
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
  }

}

