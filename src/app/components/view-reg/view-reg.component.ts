import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-view-reg',
  templateUrl: './view-reg.component.html',
  styleUrls: ['./view-reg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRegComponent {
  @Input() bikeDetails: any;
}
