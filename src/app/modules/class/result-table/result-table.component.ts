import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit, AfterViewInit {

  @Input() results: AttemptResultModel[];

  @ViewChild(MatSort) sort: MatSort;

  sortedData: MatTableDataSource<AttemptResultModel>;

  displayedColumns: string[] = ['date', 'content', 'type', 'skill', 'result', 'time'];

  constructor() {

  }

  ngOnInit(): void {
    this.sortedData = new MatTableDataSource(this.results);
  }

  public ngAfterViewInit(): void {
    this.sortedData = new MatTableDataSource(this.results);
    this.sortedData.sort = this.sort;
  }

  sortData(sort: Sort) {
    const data = this.results.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return this.compareDate(a.date, b.date, isAsc);
        case 'type':
          return this.compare(a.type, b.type, isAsc);
        case 'result':
          return this.compare(a.result, b.result, isAsc);
        case 'time':
          return this.compare(a.time, b.time, isAsc);
        default:
          return 0;
      }
    });
  }

  compareDate(a: string, b: string, isAsc: boolean) {
    return (new Date(a) < new Date(b) ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
