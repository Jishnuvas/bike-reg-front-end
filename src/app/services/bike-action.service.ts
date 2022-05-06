import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BIKE_REG_FORM } from '../constants/bike.constants';
import { BikeApiService } from './bike-api.service';
import { BikeStateService } from './bike-state.service';

@Injectable()
export class BikeActionService extends BikeStateService {
  constructor(
    private bikeApi: BikeApiService,
    private formBuilder: FormBuilder
  ) {
    super();
  }
  getBikes() {
    this.bikeApi.getBikes().subscribe({
      next: (data) => {
        this.setBikeDetailsList([...data]);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
  buildBikeRegForm() {
    this.setBikeRegForm(this.formBuilder.group(BIKE_REG_FORM));
  }
  addBike(bike: any) {
    bike = JSON.parse(JSON.stringify(bike));
    this.bikeApi.addBike(bike).subscribe({
      next: () => {
        this.setbikeFormReset();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
  getBike(bikeId: string) {
    this.bikeApi.getBike(bikeId).subscribe({
      next: (data) => {
        this.setBikeDetails(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
}
