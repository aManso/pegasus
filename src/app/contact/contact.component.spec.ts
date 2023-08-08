import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ContactComponent } from './contact.component';
import { ContactService } from './services/contact.service';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactService: SpyObj<ContactService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: ContactService, useValue: contactService = createSpyObj(['sendMessage']) },
    ]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.controls.firstName.value).toBe(null);
  });

  it('should not send a message when form is invalid', () => {
    component.sendMessage();
    expect(contactService.sendMessage).not.toHaveBeenCalled();
  });

  it('should send a message when form is valid', () => {
    contactService.sendMessage.and.returnValue(of({valid: true}));
    component.contactForm.patchValue({
        firstName: 'asd',
        lastName: 'asd',
        email: 'asd@asd.com',
        message: '012345678901234567890123456789',
        terms: true
    })
    component.sendMessage();
    expect(contactService.sendMessage).toHaveBeenCalled();
  });
});
