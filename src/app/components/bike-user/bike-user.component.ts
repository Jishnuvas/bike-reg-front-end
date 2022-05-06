import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-user',
  templateUrl: './bike-user.component.html',
  styleUrls: ['./bike-user.component.scss'],
})
export class BikeUserComponent implements OnInit {
  constructor() {
    console.log('bikeUser');
  }

  ngOnInit(): void {}
}
