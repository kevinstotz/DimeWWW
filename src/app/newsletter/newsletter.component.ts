import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService, NewsletterService } from '../_services/index';
import { Newsletter, GenericResponse } from '../_models/index';
import { MatDialog } from '@angular/material';
import { NewsletterResponseDialogComponent } from './newsletter-response-dialog';
import { Observable } from 'rxjs/Rx';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent implements OnInit {
  private newsletterForm: FormGroup;
  private newsletter: Newsletter;
  public newsletterResponse$: Observable<GenericResponse>;
  public validSubmitCallback: Function;

  constructor(private newsletterService: NewsletterService,
              public dialog: MatDialog,
              private alertService: AlertService) { }

  ngOnInit() {
    this.newsletterForm = new FormGroup({
      'email': new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
      ])
    });
  }

  displayDialog(message) {
    let dialogRef = this.dialog.open(NewsletterResponseDialogComponent, {
       height: '80px',
       width: '200px',
       data: { message: message }
   });
  }

  subscribe() {
    if (this.newsletterForm.controls.email.invalid) {
        this.newsletterForm.reset();
        return;
    }
    this.newsletter = new Newsletter();
    this.newsletter.email = this.newsletterForm.get('email').value;
    this.newsletterService.subscribeNewsletter(this.newsletter).subscribe(
        (res: GenericResponse) => {
          this.displayDialog(res.message)
          this.alertService.success(res.message);
      },
        (err: HttpErrorResponse) => {
          this.displayDialog(err.error.message)
      }
    );

  }

  get email() {    return this.newsletterForm.get('email'); }
}
