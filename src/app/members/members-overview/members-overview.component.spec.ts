import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MembersModule } from '../members.module';

import { MembersOverviewComponent } from './members-overview.component';

describe('MembersOverviewComponent', () => {
  let component: MembersOverviewComponent;
  let fixture: ComponentFixture<MembersOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MembersModule, RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(MembersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
