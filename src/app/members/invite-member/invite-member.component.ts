import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.component.html',
  styleUrls: ['./invite-member.component.scss']
})
export class InviteMemberComponent {

  constructor(
    private messageService: MessageService,
  ) {}

  public inviteMember() {
    this.messageService.add({severity:'success', summary:'Member invited', detail:'The user will receive an email soon'});
  }
}
