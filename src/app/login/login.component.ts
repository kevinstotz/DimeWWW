import { Environment } from '../environments/index';
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, UserService } from '../_services/index';
import { User, Authentication } from '../_models/index';
import { SocialsigninComponent } from '../socialsignin/index';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatFormField } from '@angular/material';
import { ForgotPasswordComponent } from '../forgot-password/index';


@Component({
    moduleId: 'module.id',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    private user: User;
    private loading: boolean;
    private returnUrl: string;
    private environment: Environment;
    private loginForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
            this.user = new User();
            this.loading = false;
            this.returnUrl= "";
            this.environment = new Environment();

        }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.loginForm = this.formBuilder.group({
            'username' : ['', [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$")
            ]],
            'password' : ['', [
                Validators.required,
                Validators.minLength(8)
            ]],
            'remember' : ['' ]
          });
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['dashboard'] || '/';
    }

    displayDialog(message) {
        let dialogRef = this.dialog.open(ForgotPasswordComponent, {
           height: '235px',
           width: '350px',
           data: { message: message }
       });
    }

    login(loginFormSubmitted) {

      if (loginFormSubmitted.controls.username.invalid) {
          this.alertService.error("");
          this.loginForm.reset();
          return;
      }
      if (loginFormSubmitted.controls.password.invalid) {
          this.alertService.error("");
          this.loginForm.controls.password.reset();
          return;
      }

      this.loading = true;
      this.authenticationService.login(loginFormSubmitted.value.username, loginFormSubmitted.value.password)
          .subscribe(
                (authenticationResponse: Authentication) => {
                  this.userService.getIdByUsername(loginFormSubmitted.value.username);
                  this.loading = false;
              },
              error => {
                  this.loginForm.reset();
                  console.log(error.error.error_description);
                  this.alertService.error(error.error.error_description);
                  this.loading = false;
              });
    }
}
