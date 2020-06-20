import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassServiceHandlerService } from './class-service-handler/class-service-handler.service';
import { UserServiceHandlerService } from './user-service-handler/user-service-handler.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserServiceHandlerService,
    ClassServiceHandlerService
  ]
})
export class ServiceHandlerModule {}
