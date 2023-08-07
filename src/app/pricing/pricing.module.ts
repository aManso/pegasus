import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrincingOverviewComponent } from './princing-overview/princing-overview.component';
import { PricingRoutingModule } from './pricing-routing.module';

@NgModule({
  declarations: [
    PrincingOverviewComponent,
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,

  ],
})
export class PricingModule { }
