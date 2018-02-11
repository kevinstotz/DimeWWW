import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalVariable } from '../globals/index';
import { AlertService, RegisterService } from '../_services/index';
import { RegisterVerify, GenericResponse, Status } from '../_models/index';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})

export class VerifyComponent implements OnInit {
  private registerVerify = new RegisterVerify();
  private status = new Status();
  private loading = false;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private registerService: RegisterService,
              private alertService: AlertService
            ) { }

  ngOnInit() {
    this.loading = true;
    this.status.id = 6;
    this.status.status = "Verify";
    this.registerVerify.authentication_code = this.route.snapshot.paramMap.get('authenticationCode');
    this.registerVerify.status = this.status;
    this.registerService.verifyRegisterEmail(this.registerVerify)
        .subscribe(
            data => {
                this.alertService.success('Verification successful', true);
                this.router.navigate(['login']);
            },
            error => {
                this.alertService.error(error.error.result);
                this.loading = false;
            });
  }

}
