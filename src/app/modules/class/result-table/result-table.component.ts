import { Component, Input, OnInit } from '@angular/core';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  @Input() results: AttemptResultModel[];

  displayedColumns: string[] = ['date', 'content', 'type', 'skill', 'result', 'time'];

  constructor() {

  }

  ngOnInit(): void {
  }

}
