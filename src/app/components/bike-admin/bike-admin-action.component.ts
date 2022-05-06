import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeActionService } from '../../services/bike-action.service';

@Component({
  selector: 'app-bike-admin-action',
  templateUrl: './bike-admin-action.component.html',
  styleUrls: ['./bike-admin-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeAdminActionComponent implements OnInit {
  readonly bikeDetailsList = this.bikeActionService.bikeDetailsList;
  constructor(
    private bikeActionService: BikeActionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bikeActionService.getBikes();
  }
  viewDetails(bike: any) {
    this.bikeActionService.getBike(bike.id);
    this.router.navigate([`view/${bike.id}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
