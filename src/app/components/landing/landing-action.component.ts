import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BikeActionService } from 'src/app/services/bike-action.service';

@Component({
  selector: 'app-landing-action',
  templateUrl: './landing-action.component.html',
  styleUrls: ['./landing-action.component.scss'],
})
export class LandingActionComponent implements OnInit {
  readonly bikeRegForm = this.bikeAction.bikeRegForm;
  constructor(private readonly bikeAction: BikeActionService) {}
  ngOnInit(): void {
    this.bikeAction.buildBikeRegForm();
    this.bikeAction.bikeFormReset.subscribe(() => {
      this.bikeAction.buildBikeRegForm();
    });
  }
  regFormEvent(formData: any) {
    this.bikeAction.addBike(formData);
  }
}
