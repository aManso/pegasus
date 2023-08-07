import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, debounceTime, Observable } from 'rxjs';
import { of } from 'rxjs';
import { ContactInputInterface } from '../contracts/contact.contracts';

export const CONTACT_URL = '/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) { }

  public sendMessage(input: ContactInputInterface): Observable<any> {
    return this.http.post(CONTACT_URL, input).pipe(
      debounceTime(300),
      catchError(_ => of({valid: true}))
    )
  }
}
