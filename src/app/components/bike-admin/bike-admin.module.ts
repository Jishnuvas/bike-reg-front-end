import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeAdminComponent } from './bike-admin.component';
import { BikeAdminActionComponent } from './bike-admin-action.component';
import { BikeActionService } from 'src/app/services/bike-action.service';
import { BikeApiService } from 'src/app/services/bike-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BikeAdminRoutingModule } from './bike-admin-routing.module';
import { ViewRegComponent } from '../view-reg/view-reg.component';
import { ViewRegActionComponent } from '../view-reg/view-reg-action.component';
import { TokenizeInterceptor } from 'src/app/interceptors/tokenize.interceptor';
import { AuthGuard } from 'src/app/guards/auth.guard';

@NgModule({
  declarations: [
    BikeAdminComponent,
    BikeAdminActionComponent,
    ViewRegComponent,
    ViewRegActionComponent,
  ],
  imports: [CommonModule, HttpClientModule, BikeAdminRoutingModule],
  exports: [
    BikeAdminComponent,
    BikeAdminActionComponent,
    ViewRegComponent,
    ViewRegActionComponent,
  ],
  providers: [
    BikeActionService,
    BikeApiService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenizeInterceptor, multi: true },
  ],
})
export class BikeAdminModule {}
