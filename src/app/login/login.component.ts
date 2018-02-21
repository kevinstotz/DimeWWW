import { Environment } from '../environments/index';
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { User, Authentication } from '../_models/index';
import { SocialsigninComponent } from '../socialsignin/index';


@Component({
    moduleId: 'module.id',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    private user: User;
    private loading: boolean;
    private returnUrl: string;
    private environment: Environment;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
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

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['dashboard'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
                  (authenticationResponse: Authentication) => {
                    console.log(authenticationResponse);
                    window.location.href=this.environment.global.DASHBOARD_URL;
                    this.loading = false;
                },
                error => {
                    console.log(error);
                    this.alertService.error(error.error.error_description);
                    this.loading = false;
                });
    }
}
