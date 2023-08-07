import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, debounceTime, Observable, of } from 'rxjs';
import { MEMBERS_MOCK } from '../constants/members-mock';
import { MEMBERS_URL } from '../constants/members.constants';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private http: HttpClient,
  ) { }

  public getMembers(): Observable<any> {
    return this.http.get(MEMBERS_URL).pipe(
      debounceTime(300),
      catchError(_ => of(MEMBERS_MOCK.members))
    )
  }
}
