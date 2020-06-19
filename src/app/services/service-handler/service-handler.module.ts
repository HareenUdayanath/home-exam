import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceHandlerService } from './user-service-handler/user-service-handler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    UserServiceHandlerService
  ]
})
export class ServiceHandlerModule { }
