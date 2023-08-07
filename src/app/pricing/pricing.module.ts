import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { PrincingOverviewComponent } from './princing-overview/princing-overview.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { PrincingTileComponent } from './princing-tile/princing-tile.component';
import { PricingService } from './services/pricing.service';

@NgModule({
  declarations: [
    PrincingOverviewComponent,
    PrincingTileComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,

    CardModule,
    ButtonModule,
    RippleModule,
    ToastModule,
  ],
  providers: [
    PricingService,
    MessageService,
  ]
})
export class PricingModule { }
