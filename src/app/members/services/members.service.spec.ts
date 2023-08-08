import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MembersService } from './members.service';

describe('MembersService', () => {
  let service: MembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(MembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
