import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { InviteMemberComponent } from './invite-member.component';

describe('InviteMemberComponent', () => {
  let component: InviteMemberComponent;
  let fixture: ComponentFixture<InviteMemberComponent>;
  let messageService: MessageService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [InviteMemberComponent],
      imports: [ToastModule, CommonModule,],
      providers: [
        MessageService,
      ]
    });
    messageService = TestBed.inject(MessageService);
    fixture = TestBed.createComponent(InviteMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invite a member', () => {
    spyOn(messageService, 'add').and.callThrough();
    component.inviteMember();
    expect(messageService.add).toHaveBeenCalled();
  });


});
