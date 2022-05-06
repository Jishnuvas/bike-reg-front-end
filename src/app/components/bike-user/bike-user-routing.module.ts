import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeUserComponent } from './bike-user.component';

const routes: Routes = [{ path: '', component: BikeUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeUserRoutingModule {}
