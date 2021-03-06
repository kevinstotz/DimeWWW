import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { AlertService, ContactusService } from '../_services/index';
import { Contactus, GenericResponse } from '../_models/index';
import { MatDialog, MatFormField } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  private contactus: Contactus;
  public contactusResponse$: Observable<GenericResponse>;
  public contactusForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private alertService: AlertService,
              public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private contactusService: ContactusService) {

  }

  ngOnInit() {
    this.contactusForm = this.formBuilder.group({
        floatLabel: 'auto',
        hideRequired: false,
        'email' : ['', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$")
        ]],
        'subject' : ['', [
            Validators.required,
            Validators.minLength(4)
        ]],
        'firstname' : ['', [
            Validators.required,
            Validators.minLength(4)
        ]],
        'message': ['', [
            Validators.required,
            Validators.minLength(4)
        ]],
        'url': ['', Validators.required]
      });

    }

    sendContactUs(contactusForm) {

      if (contactusForm.controls.email.invalid ||
          contactusForm.controls.subject.invalid ||
          contactusForm.controls.message.invalid ||
          contactusForm.controls.firstname.invalid ) {
          return;
      }

      if (this.contactusForm.get('url').value != '' ) { return;}
      this.contactus = new Contactus();
      this.contactus.email = this.contactusForm.get('email').value;
      this.contactus.name = this.contactusForm.get('firstname').value;
      this.contactus.subject = this.contactusForm.get('subject').value;
      this.contactus.message = this.contactusForm.get('message').value;
      this.alertService.success("Sending...");
      this.contactusService.send(this.contactus).subscribe(
          (res: GenericResponse) => {
            this.contactusForm.reset();
            console.log(res.message)
            this.alertService.success(res.message);

        },
          (err: HttpErrorResponse) => {
            console.log(err.error.message)
            this.alertService.error(err.error.message);
        }
      );
    }

}
