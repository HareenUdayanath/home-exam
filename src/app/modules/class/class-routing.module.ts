import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/security/auth/auth.guard';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule {}
