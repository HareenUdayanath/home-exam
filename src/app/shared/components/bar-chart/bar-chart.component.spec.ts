import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoxElementDirective } from '../../directives/box-element/box-element.directive';

import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartComponent, BoxElementDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    const elements = [
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
    component.elements = <any> elements;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have boxes', () => {
    const elementArr = fixture.nativeElement.getElementsByClassName('bar-chart-row-container')[0].getElementsByTagName('div');
    expect(elementArr.length).toBe(4);
  });

});
