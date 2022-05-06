import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-bike-admin',
  templateUrl: './bike-admin.component.html',
  styleUrls: ['./bike-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeAdminComponent {
  @Input() bikeDetailsList: any;
  @Output() detailsEvent: EventEmitter<any> = new EventEmitter();
  viewDetails(bike: any) {
    this.detailsEvent.emit(bike);
  }
}
