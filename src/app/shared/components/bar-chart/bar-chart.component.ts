import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BarChartElement } from './bar-chart-element.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {

  @Input() elements: Array<BarChartElement>;
  @Input() height = '15px';

  @ViewChild('container') container: ElementRef;

  public idDimension = '15px';

  constructor() {
  }

  ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.prepareElements();
  }

  prepareElements() {
    const totalWidth = this.container.nativeElement.offsetWidth;
    this.elements.forEach(boxElement => {
      boxElement.width = totalWidth * (boxElement.percentage / 100);
    });
  }

}
