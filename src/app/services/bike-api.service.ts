//angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//rxjs
import { Observable } from 'rxjs';
@Injectable()
export class BikeApiService {
  constructor(private readonly http: HttpClient) {}

  //getting all the entries of bikes
  getBikes(): Observable<any> {
    return this.http.get<any>('/server/api/v1/bikes');
  }
  //getting a bike information by id
  getBike(id: string): Observable<any> {
    return this.http.get<any>(`/server/api/v1/bikes/${id}`);
  }

  //add a new bike to the list of bikes
  addBike(bike: any): Observable<any> {
    return this.http.post<any>('/server/api/v1/bikes', bike);
  }
}
