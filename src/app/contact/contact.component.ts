import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    CardModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    ToastModule,
  ],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly contactService: ContactService,
    private readonly router: Router,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.changeDetectorRef.detectChanges();
  }

  private initForm() {
    this.contactForm = this._fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      message: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])],
      terms: [null, Validators.required],
    });
  }

  public sendMessage() {
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value).subscribe((response)=> {
        response && response.valid ? this.showSuccessMsgAndContinue() : this.showErrorMsg();
      });
    }
  }

  private showErrorMsg() {
    this.messageService.add({severity:'error', summary:'Error', detail:'There has been an error and we can not process the request, please try in a few minutes and if it persists please contact us'});
  }

  private showSuccessMsgAndContinue() {
    this.messageService.add({severity:'success', summary:'Message Sent', detail:'Thanks, we will process it as soon as possible'});
    setTimeout(() => {
      this.router.navigate(['/pricing'])
    }, 3000); 
  }
}
