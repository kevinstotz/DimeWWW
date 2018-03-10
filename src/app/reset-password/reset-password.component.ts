import { Environment } from '../environments/index';
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, RegisterService } from '../_services/index';
import { ResetPassword, GenericResponse } from '../_models/index';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatFormField } from '@angular/material';
import { Buffer } from 'buffer';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  private loading: boolean;
  private resetPassword: ResetPassword
  private returnUrl: string;
  private environment: Environment;
  private authorizationCode: string;
  private passwordResetForm: FormGroup;

  constructor(
      private registerService: RegisterService,
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private alertService: AlertService) {
          this.resetPassword = new ResetPassword();
          this.loading = false;
          this.returnUrl= "";
          this.environment = new Environment();
          this.route.params.subscribe(params => {
            this.authorizationCode = params['authorizationCode'];
          });
    }

  ngOnInit() {

    this.passwordResetForm = this.formBuilder.group({
        'password' : ['', [
            Validators.required,
            Validators.minLength(8)
        ]],
        'passwordConfirm' : ['', [
            Validators.required,
            Validators.minLength(8)
        ]]
      });
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['dashboard'] || '/';
  }

  dec(s) {
    var b = new Buffer(s, 'base64');
    var x = new Uint8Array(b.length);
    for (var i = 0; i < b.length; i++) x[i] = b[i];
    return x;
  }

  resetPasswordSubmit(passwordResetForm) {
    if (passwordResetForm.controls.password.invalid) {
        this.alertService.error("");
        this.passwordResetForm.reset();
        return;
    }

    if (passwordResetForm.controls.passwordConfirm.invalid) {
        this.alertService.error("");
        this.passwordResetForm.controls.password.reset();
        return;
    }
    if (passwordResetForm.controls.password.value != passwordResetForm.controls.passwordConfirm.value) {
        this.alertService.error("Passwords do not match");
        this.passwordResetForm.reset();
        return;
    }

    this.loading = true;
    this.resetPassword.password = passwordResetForm.controls.password.value;
    this.resetPassword.passwordConfirm = passwordResetForm.controls.passwordConfirm.value;
    this.resetPassword.authorizationCode = this.authorizationCode;
    this.registerService.resetPassword(this.resetPassword)
        .subscribe(
              (genericResponse: GenericResponse) => {
                console.log(genericResponse.message)
                this.alertService.error(genericResponse.message);
                // window.location.href=this.environment.global.PASSWORD_RESET_URL;
                this.loading = false;
            },
            error => {
                this.passwordResetForm.reset();
                this.alertService.error(error.error.error_description);
                this.loading = false;
            });
  }
}
