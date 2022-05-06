import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { LandingActionComponent } from './components/landing/landing-action.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/bike-admin/bike-admin.module').then(
        (m) => m.BikeAdminModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/bike-user/bike-user.module').then(
        (m) => m.BikeUserModule
      ),
  },
  { path: 'home', component: LandingActionComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
