//Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    console.log('app');
  }
  title = 'bikeReg';
  faHomeUser = faHomeUser;
  handleRoute(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
