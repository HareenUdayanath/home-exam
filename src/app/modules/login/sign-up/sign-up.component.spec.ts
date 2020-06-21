import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizationService } from '../../../shared/security/authorization/authorization.service';
import { SecurityModule } from '../../../shared/security/security.module';
import { LoginModule } from '../login.module';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        LoginModule,
        BrowserAnimationsModule
      ],
      declarations: [SignUpComponent],
      providers: [
        AuthorizationService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name required', async() => {
    fixture.whenStable().then(() => {
      const username = component.form.controls.username;
      const password = component.form.controls.password;
      expect(username.valid).toBeFalsy();
      expect(password.valid).toBeFalsy();
      expect(component.form.valid).toBeFalsy();

      // Event if password is set, form is invalid
      password.setValue('TEST');
      expect(component.form.valid).toBeFalsy();
      expect(username.errors.required).toBeTruthy();

    });

  });

  it('password required', async() => {
    fixture.whenStable().then(() => {
      const username = component.form.controls.username;
      const password = component.form.controls.password;
      expect(username.valid).toBeFalsy();
      expect(password.valid).toBeFalsy();
      expect(component.form.valid).toBeFalsy();

      // Event if username is set, form is invalid
      username.setValue('TEST');
      expect(component.form.valid).toBeFalsy();
      expect(password.errors.required).toBeTruthy();

    });

  });

  it('form valid when username and password are given', async() => {
    fixture.whenStable().then(() => {
      const username = component.form.controls.username;
      const password = component.form.controls.password;
      expect(username.valid).toBeFalsy();
      expect(password.valid).toBeFalsy();
      expect(component.form.valid).toBeFalsy();

      username.setValue('TEST');
      password.setValue('TEST');
      expect(component.form.valid).toBeTruthy();

    });

  });

});
