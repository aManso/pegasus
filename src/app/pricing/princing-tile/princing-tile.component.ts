import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PRICING_TYPES_TYPE } from '../constants/pricing.constants';
import { PrincingDetailsInterface } from '../contracts/pricing.contracts';
import { PricingService } from '../services/pricing.service';

@Component({
  selector: 'app-princing-tile',
  templateUrl: './princing-tile.component.html',
  styleUrls: ['./princing-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrincingTileComponent implements OnInit {
  @Input() pricingTileType: PRICING_TYPES_TYPE;
  public pricingDetails: PrincingDetailsInterface;

  constructor(
    private readonly pricingService: PricingService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router,
    private readonly messageService: MessageService,
  ) {}

  public ngOnInit(): void {
      if (this.pricingTileType) {
        this.pricingService.getPriceDetails(this.pricingTileType).subscribe((response: PrincingDetailsInterface)=> {
          this.pricingDetails = response;
          this.changeDetectorRef.detectChanges();
        })
      }
  }

  public selectPlan() {
    this.pricingService.selectPlan(this.pricingTileType).subscribe((response)=> {
      response && response.valid ? this.showSuccessMsgAndContinue() : this.showErrorMsg();
    });
  }

  private showErrorMsg() {
    this.messageService.add({severity:'error', summary:'Error', detail:'There has been an error and we can not process the request, please try in a few minutes and if it persists please contact us'});
  }

  private showSuccessMsgAndContinue() {
    this.messageService.add({severity:'success', summary:'Package hired', detail:'Thanks, we will send you an email with the entire promotion'});
    setTimeout(() => {
      this.router.navigate(['/members'])
    }, 3000); 
  }

}
