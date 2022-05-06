import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeUserComponent } from './bike-user.component';
import { BikeUserRoutingModule } from './bike-user-routing.module';

@NgModule({
  declarations: [BikeUserComponent],
  imports: [CommonModule, BikeUserRoutingModule],
  exports: [BikeUserComponent],
})
export class BikeUserModule {}
