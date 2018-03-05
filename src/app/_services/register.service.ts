import { Environment } from '../environments/index';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { GenericResponse, Register, RegisterVerify, Affiliate, ForgotPassword } from '../_models/index';


@Injectable()
export class RegisterService {
    private environment: Environment;
    private httpOptions: object;

    constructor(private http: HttpClient) {
      this.httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.environment = new Environment();
    }

    registerUser(register: Register) {
        return this.http.post<GenericResponse>(this.environment.api.REGISTER_URL, register, this.httpOptions);
    }

    verifyRegisterEmail(registerVerify: RegisterVerify) {
        return this.http.get<GenericResponse>(this.environment.api.REGISTER_VERIFY_URL + registerVerify.authentication_code, this.httpOptions);
    }

    registerAffiliate(affiliate: Affiliate) {
        return this.http.post<GenericResponse>(this.environment.api.REGISTER_AFFILIATE_URL, affiliate, this.httpOptions);
    }

    forgotPassword(forgotPassword: ForgotPassword) {
        return this.http.post<GenericResponse>(this.environment.api.FORGOT_PASSWORD_URL, forgotPassword, this.httpOptions);
    }

}
