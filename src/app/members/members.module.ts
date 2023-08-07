import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersOverviewComponent } from './members-overview/members-overview.component';
import { MembersRoutingModule } from './members-routing.module';

@NgModule({
  declarations: [
    MembersOverviewComponent,
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
  ]
})
export class MembersModule { }
