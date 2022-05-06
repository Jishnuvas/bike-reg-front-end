import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BIKES } from 'src/app/constants/bike.constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @Input() bikeRegForm!: FormGroup;
  readonly bikes = BIKES;
  @Output() regFormEvent: EventEmitter<any> = new EventEmitter();
  registerBikes() {
    this.regFormEvent.emit(this.bikeRegForm.value);
  }
}
