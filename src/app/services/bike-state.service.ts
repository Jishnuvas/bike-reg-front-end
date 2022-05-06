import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class BikeStateService {
  private readonly _bikeDetailsList = new BehaviorSubject<any>([]);
  private readonly _bikeRegForm = new BehaviorSubject<any>(null);
  private readonly _bikeFormReset = new Subject();
  private _bikeDetail = new BehaviorSubject<any>(null);

  get bikeDetails() {
    return this._bikeDetail.asObservable();
  }
  setBikeDetails(bike: any) {
    this._bikeDetail.next(bike);
  }
  get bikeFormReset() {
    return this._bikeFormReset.asObservable();
  }
  setbikeFormReset() {
    this._bikeFormReset.next('reset');
  }
  get bikeDetailsList() {
    return this._bikeDetailsList.asObservable();
  }
  setBikeDetailsList(bikeDetailsList: any) {
    this._bikeDetailsList.next(bikeDetailsList);
  }
  get bikeRegForm() {
    return this._bikeRegForm.asObservable();
  }
  setBikeRegForm(bikeRegForm: any) {
    this._bikeRegForm.next(bikeRegForm);
  }
}
