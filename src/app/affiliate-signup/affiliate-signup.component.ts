import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Affiliate, GenericResponse } from '../_models/index';
import { AlertService, RegisterService } from '../_services/index';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatFormField } from '@angular/material';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-affiliate-signup',
  templateUrl: './affiliate-signup.component.html',
  styleUrls: ['./affiliate-signup.component.scss']
})
export class AffiliateSignupComponent implements OnInit {
  private registerAffiliateForm: FormGroup;
  private affiliate: Affiliate;
  private loading: Boolean;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private registerService: RegisterService,
      private alertService: AlertService) { }


      ngOnInit() {
        this.registerAffiliateForm = this.formBuilder.group({
            'email' : ['', [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ]],
            'lastName'  : ['', [
                Validators.required,
                Validators.minLength(4)
            ]],
            'firstName' : ['', [
                Validators.required,
                Validators.minLength(4)
            ]],
            'companyName' : ['', [
                Validators.required,
                Validators.minLength(4)
            ]],
            'phoneNumber' : ['', [
                Validators.required,
                Validators.minLength(10),
                Validators.pattern('^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$')
            ]],
            'zipCode' : ['', [
                Validators.required,
                Validators.minLength(5)
            ]],
            'url': ['',  Validators.required]
          });

      }

      registerAffiliate(registerAffiliateForm: any, formDirective: FormGroupDirective) {
          if (registerAffiliateForm.controls.email.invalid ||
              registerAffiliateForm.controls.firstName.invalid ||
              registerAffiliateForm.controls.lastName.invalid ||
              registerAffiliateForm.controls.companyName.invalid ||
              registerAffiliateForm.controls.phoneNumber.invalid ||
              registerAffiliateForm.controls.zipCode.invalid) {
              this.registerAffiliateForm.reset();
              return;
          }
          console.log(this.registerAffiliateForm.get('url').value);
          if (this.registerAffiliateForm.get('url').value != "" ) { console.log("F"); return;}
          this.affiliate = new Affiliate();

          this.affiliate.email = this.registerAffiliateForm.get('email').value;
          this.affiliate.firstName = this.registerAffiliateForm.get('firstName').value;
          this.affiliate.lastName = this.registerAffiliateForm.get('lastName').value;
          this.affiliate.zipCode = this.registerAffiliateForm.get('zipCode').value;
          this.affiliate.phoneNumber = this.registerAffiliateForm.get('phoneNumber').value;
          this.affiliate.companyName = this.registerAffiliateForm.get('companyName').value;

          this.loading = true;
          this.registerService.registerAffiliate(this.affiliate)
              .subscribe(
                  data => {
                      this.registerAffiliateForm.reset();
                      this.alertService.success('Registration successful.  Check Your email for Instructions', true);
                      this.loading = false;
                      //  this.router.navigate(['login']);
                  },
                  errorResponse => {
                      this.registerAffiliateForm.reset();
                      this.alertService.error(errorResponse.error.result);
                      this.loading = false;
                  });
      }
}
