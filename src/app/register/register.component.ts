import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register, GenericResponse } from '../_models/index';
import { AlertService, RegisterService } from '../_services/index';
// import { DeviceDetectorService } from 'ngx-device-detector';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatFormField } from '@angular/material';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: 'module.id',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit  {
    private register = new Register;
    private loading = false;
    private deviceInfo = null;
    private registerForm: FormGroup;
    public registerResponse$: Observable<GenericResponse>;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private registerService: RegisterService,
      //  private deviceService: DeviceDetectorService,
        private alertService: AlertService) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
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
          'zipCode' : ['', [
              Validators.required,
              Validators.minLength(5)
          ]],
          'url': ['',  Validators.required]
        });

    }

    registerUser(registerForm) {
        if (registerForm.controls.email.invalid ||
            registerForm.controls.firstName.invalid ||
            registerForm.controls.lastName.invalid ||
            registerForm.controls.zipCode.invalid ) {
            this.registerForm.reset();
            return;
        }

        if (this.registerForm.get('url').value != '' ) { return;}
        this.register = new Register();

        this.register.email = this.registerForm.get('email').value;
        this.register.firstName = this.registerForm.get('firstName').value;
        this.register.lastName = this.registerForm.get('lastName').value;
        this.register.zipCode = this.registerForm.get('zipCode').value;

        this.loading = true;
      //  this.register.deviceInfo = this.deviceService.getDeviceInfo();
        this.registerService.registerUser(this.register)
            .subscribe(
                data => {
                    this.registerForm.reset();
                    this.alertService.success('Registration successful.  Check Your email for Login Instructions', true);
                    this.loading = false;
                    //  this.router.navigate(['login']);
                },
                errorResponse => {
                    this.registerForm.reset();
                    this.alertService.error(errorResponse.error.result);
                    this.loading = false;
                });
    }
}
