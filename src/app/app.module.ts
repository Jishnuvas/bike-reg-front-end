import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeAdminModule } from './components/bike-admin/bike-admin.module';
import { BikeUserModule } from './components/bike-user/bike-user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingModule } from './components/landing/landing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CallbackComponent } from './components/callback/callback.component';
import { Auth0Service } from './services/auth0.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent, CallbackComponent],
  imports: [
    BrowserModule,
    LandingModule,
    AppRoutingModule,
    BikeUserModule,
    BikeAdminModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [Auth0Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
