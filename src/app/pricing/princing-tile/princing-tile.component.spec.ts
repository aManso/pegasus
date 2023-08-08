import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { PRICING_DETAILS_MOCK } from '../constants/pricing-details-mock';
import { PRICING_TYPES } from '../constants/pricing.constants';
import { PricingModule } from '../pricing.module';
import { PricingService } from '../services/pricing.service';

import { PrincingTileComponent } from './princing-tile.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

const pricingType = PRICING_TYPES.BASIC;

describe('PrincingTileComponent', () => {
  let component: PrincingTileComponent;
  let fixture: ComponentFixture<PrincingTileComponent>;
  let pricingService: SpyObj<PricingService>;
  let messageService: SpyObj<MessageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PricingModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [
        { provide: MessageService, useValue: messageService = createSpyObj(['add']) },
        { provide: PricingService, useValue: pricingService = createSpyObj(['getPriceDetails', 'selectPlan']) },
      ]
    });
    fixture = TestBed.createComponent(PrincingTileComponent);
    component = fixture.componentInstance;
    component.pricingTileType = pricingType;
    pricingService.getPriceDetails.and.returnValue(of(PRICING_DETAILS_MOCK[pricingType]));
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
    expect(pricingService.getPriceDetails).toHaveBeenCalled();
    expect(component.pricingDetails).toEqual(PRICING_DETAILS_MOCK[pricingType]);
  });
  
  it('should be able to select a plan', () => {
    pricingService.selectPlan.and.returnValue(of({valid: true}));
    component.selectPlan();
    expect(pricingService.selectPlan).toHaveBeenCalled();   
    expect(messageService.add).toHaveBeenCalled(); 
  });
});
