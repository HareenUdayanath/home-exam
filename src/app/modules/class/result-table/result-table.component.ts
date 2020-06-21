import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() results: AttemptResultModel[];

  @ViewChild(MatSort) sort: MatSort;

  public sortedData: MatTableDataSource<AttemptResultModel>;
  public displayedColumns: string[] = ['date', 'content', 'type', 'skill', 'result', 'time'];

  constructor() {

  }

  ngOnInit(): void {
    this.sortedData = new MatTableDataSource(this.results);
  }

  public ngAfterViewInit(): void {
    this.settingSorters();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.settingSorters();
  }

  private settingSorters() {
    this.sortedData = new MatTableDataSource(this.results);
    this.sortedData.sort = this.sort;
  }

  compareDate(a: string, b: string, isAsc: boolean) {
    return (new Date(a) < new Date(b) ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
