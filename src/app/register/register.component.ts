import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../_models/index';
import { AlertService, RegisterService } from '../_services/index';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    moduleId: 'module.id',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    private register = new Register();
    private loading = false;
    private deviceInfo = null;

    constructor(
        private router: Router,
        private registerService: RegisterService,
        private deviceService: DeviceDetectorService,
        private alertService: AlertService) { }

    registerUser() {
        this.loading = true;
        this.register.deviceInfo = this.deviceService.getDeviceInfo();
        this.registerService.registerUser(this.register)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful.  Check Your email for Login Instructions', true);
                    this.loading = false;
                    //  this.router.navigate(['login']);
                },
                errorResponse => {
                    this.alertService.error(errorResponse.error.result);
                    this.loading = false;
                });
    }
}
