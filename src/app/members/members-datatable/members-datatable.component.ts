import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberInterface } from '../contracts/member.contracts';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members-datatable',
  templateUrl: './members-datatable.component.html',
  styleUrls: ['./members-datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersDatatableComponent implements OnInit {
  public members: Observable<MemberInterface[]>;

  constructor(
    private readonly membersService: MembersService,
  ) {}

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }
}
