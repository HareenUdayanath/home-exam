import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultsComponent } from '../../../modules/class/results/results.component';
import { ResultCalculationHelperService } from '../../../services/helpers/result-calculation-helper/result-calculation-helper.service';
import { ClassServiceHandlerService } from '../../../services/service-handler/class-service-handler/class-service-handler.service';
import { DateRangeFilterPipe } from '../../pipes/date-range-filter/date-range-filter.pipe';
import { AuthorizationService } from '../../security/authorization/authorization.service';
import { SecurityModule } from '../../security/security.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SecurityModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        AuthorizationService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
