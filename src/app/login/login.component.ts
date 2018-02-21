import { Environment } from '../environments/index';
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { User, Authentication } from '../_models/index';
import { SocialsigninComponent } from '../socialsignin/index';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatFormField } from '@angular/material';


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
                Validators.pattern("[^ @]*@[^ @]*")
            ]],
            'password' : ['', [
                Validators.required,
                Validators.minLength(8)
            ]]
          });
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['dashboard'] || '/';
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
                  window.location.href=this.environment.global.DASHBOARD_URL;
                  this.loading = false;
              },
              error => {
                  this.loginForm.reset();
                  this.alertService.error(error.error.error_description);
                  this.loading = false;
              });
    }
}
