import { Component, OnInit } from '@angular/core';
import { MemberInterface } from '../contracts/member.contracts';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members-datatable',
  templateUrl: './members-datatable.component.html',
  styleUrls: ['./members-datatable.component.scss']
})
export class MembersDatatableComponent implements OnInit {
  public members: MemberInterface[] = [];

  constructor(
    private readonly membersService: MembersService,
  ) {}

  ngOnInit(): void {
      this.membersService.getMembers().subscribe((members: MemberInterface[])=> {
        this.members = members;
      })
  }

}
