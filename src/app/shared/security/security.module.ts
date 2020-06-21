import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHandlerModule } from '../../services/service-handler/service-handler.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthorizationService } from './authorization/authorization.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceHandlerModule
  ],
  providers: [
    AuthorizationService,
    AuthGuard
  ]
})
export class SecurityModule {}
