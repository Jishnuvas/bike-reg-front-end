import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingActionComponent } from './landing-action.component';

@NgModule({
  declarations: [LandingComponent, LandingActionComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [LandingComponent, LandingActionComponent],
})
export class LandingModule {}
