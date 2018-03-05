import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService, RegisterService } from '../_services/index';
import { ForgotPassword, GenericResponse } from '../_models/index';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private forgotPasswordForm: FormGroup;
  public validSubmitCallback: Function;
  private forgotPassword: ForgotPassword;
  private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,10}$";

  constructor(
    private registerService: RegisterService,
    private dialog: MatDialog,
    private alertService: AlertService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('', [
          Validators.required,
          Validators.pattern(this.emailPattern)
      ])
    });
  }

  submitForgotPassword() {
    if (this.forgotPasswordForm.controls.email.invalid) {
      this.forgotPasswordForm.reset();
      return;
    }
    this.alertService.success("Check Your Email.");
    this.forgotPassword = new ForgotPassword();
    this.forgotPassword.email = this.forgotPasswordForm.get('email').value;
    this.registerService.forgotPassword(this.forgotPassword).subscribe(
        (res: GenericResponse) => {
          this.forgotPasswordForm.reset();
          this.alertService.success(res.message);
      },
        (err: GenericResponse) => {
          this.forgotPasswordForm.reset();
      }
    );
  }

}
