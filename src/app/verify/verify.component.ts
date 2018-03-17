import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertService, RegisterService } from '../_services/index';
import { RegisterVerify, GenericResponse, Status } from '../_models/index';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})

export class VerifyComponent implements OnInit {
  private registerVerify: RegisterVerify;
  private status: Status;
  private loading: boolean;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private registerService: RegisterService,
              private alertService: AlertService
            ) {
              this.status = new Status();
              this.loading = false;
              this.registerVerify = new RegisterVerify();
              this.loading = true;
              this.status.id = 6;
              this.status.status = "Verify";
              this.registerVerify.authentication_code = this.route.snapshot.paramMap.get('authenticationCode');
              this.registerVerify.status = this.status;
  }

  ngOnInit() {
    this.registerService.verifyRegisterEmail(this.registerVerify)
        .subscribe(
            data => {
                this.alertService.success('Verification successful.  Check Your email for Password.', true);
                //this.router.navigate(['login']);
            },
            error => {
                this.alertService.error(error.error.result);
                this.loading = false;
            });
  }

}
