import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BikeActionService } from 'src/app/services/bike-action.service';

@Component({
  selector: 'app-view-reg-action',
  templateUrl: './view-reg-action.component.html',
  styleUrls: ['./view-reg-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRegActionComponent implements OnInit {
  readonly bikeDetails = this.bikeAction.bikeDetails;
  constructor(private bikeAction: BikeActionService) {}

  ngOnInit(): void {}
}
