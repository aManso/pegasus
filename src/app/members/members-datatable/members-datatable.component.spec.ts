import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MEMBERS_MOCK } from '../constants/members-mock';
import { MembersModule } from '../members.module';
import { MembersService } from '../services/members.service';

import { MembersDatatableComponent } from './members-datatable.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('MembersDatatableComponent', () => {
  let component: MembersDatatableComponent;
  let fixture: ComponentFixture<MembersDatatableComponent>;
  let membersService: SpyObj<MembersService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersDatatableComponent],
      imports: [
        MembersModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [
        { provide: MembersService, useValue: membersService = createSpyObj(['getMembers']) },
      ]
    });
    fixture = TestBed.createComponent(MembersDatatableComponent);
    component = fixture.componentInstance;
    membersService.getMembers.and.returnValue(of(MEMBERS_MOCK.members));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(membersService.getMembers).toHaveBeenCalled();
  });
});
