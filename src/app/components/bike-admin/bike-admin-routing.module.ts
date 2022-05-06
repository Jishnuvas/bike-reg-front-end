import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ViewRegActionComponent } from '../view-reg/view-reg-action.component';
import { ViewRegComponent } from '../view-reg/view-reg.component';
import { BikeAdminActionComponent } from './bike-admin-action.component';

const routes: Routes = [
  { path: '', component: BikeAdminActionComponent, canActivate: [AuthGuard] },
  {
    path: 'view/:id',
    component: ViewRegActionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeAdminRoutingModule {}
