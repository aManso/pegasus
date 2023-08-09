import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRICING_TYPES } from '../constants/pricing.constants';

@Component({
  selector: 'app-princing-overview',
  templateUrl: './princing-overview.component.html',
  styleUrls: ['./princing-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrincingOverviewComponent {
  public pricingTypes = PRICING_TYPES;

}
