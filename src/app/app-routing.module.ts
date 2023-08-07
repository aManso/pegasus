import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '', redirectTo: 'pricing', pathMatch: 'full'},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
