import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersOverviewComponent } from './members-overview/members-overview.component';
import { MembersRoutingModule } from './members-routing.module';
import { MembersDatatableComponent } from './members-datatable/members-datatable.component';
import { InviteMemberComponent } from './invite-member/invite-member.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    MembersOverviewComponent,
    MembersDatatableComponent,
    InviteMemberComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,

    ButtonModule,
    RippleModule,
    TableModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ]
})
export class MembersModule { }
