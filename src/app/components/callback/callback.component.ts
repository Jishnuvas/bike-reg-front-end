import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Service } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallbackComponent implements OnInit {
  constructor(
    private readonly auth0Service: Auth0Service,
    private readonly route: Router
  ) {}
  ngOnInit(): void {
    this.auth0Service.handleAuthentication();
    this.route.navigate(['/admin']);
  }
}
