import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
  ],
})
export class PageNotFoundComponent {

  constructor(private readonly router: Router) {}

  public goPricing() {
    this.router.navigate(['/pricing'])
  }

}
