import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { BarChartElement } from './bar-chart-element.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() elements: Array<BarChartElement>;
  @Input() height = '15px';

  @ViewChild('container') container: ElementRef;

  public idDimension = '15px';

  constructor() {
  }

  ngOnInit(): void {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.prepareElements();
  }

  prepareElements() {
    if (this.container) {
      const totalWidth = this.container.nativeElement.offsetWidth;
      this.elements.forEach(boxElement => {
        boxElement.width = totalWidth * (boxElement.percentage / 100);
      });
    }
  }

}
