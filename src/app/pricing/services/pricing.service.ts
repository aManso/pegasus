import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PRICING_DETAILS_URL, PRICING_SELECT_URL, PRICING_TYPES_TYPE } from '../constants/pricing.constants';
import { catchError, debounceTime, Observable } from 'rxjs';
import { of } from 'rxjs';
import { PRICING_DETAILS_MOCK } from '../constants/pricing-details-mock';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(
    private http: HttpClient,
  ) { }

  public getPriceDetails(pricingType: PRICING_TYPES_TYPE): Observable<any> {
    return this.http.get(PRICING_DETAILS_URL + '?type=' + pricingType).pipe(
      debounceTime(300),
      catchError(_ => of(PRICING_DETAILS_MOCK[pricingType]))
    )
  }

  public selectPlan(pricingType: PRICING_TYPES_TYPE): Observable<any> {
    return this.http.get(PRICING_SELECT_URL + '?type=' + pricingType).pipe(
      catchError(_ => of({valid: true}))
    )
  }
}
