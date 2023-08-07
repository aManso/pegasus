import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PricingModule } from '../pricing.module';

import { PrincingOverviewComponent } from './princing-overview.component';

describe('PrincingOverviewComponent', () => {
  let component: PrincingOverviewComponent;
  let fixture: ComponentFixture<PrincingOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PricingModule, RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(PrincingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
