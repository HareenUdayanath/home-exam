import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserStore } from '../../resources/user-store';
import { ServiceHandlerModule } from '../../services/service-handler/service-handler.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ServiceHandlerModule,
    HttpClientInMemoryWebApiModule.forRoot(UserStore)
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class LoginModule {}
