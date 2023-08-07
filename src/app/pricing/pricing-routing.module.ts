import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincingOverviewComponent } from './princing-overview/princing-overview.component';

const routes: Routes = [
  { path: '', component: PrincingOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
