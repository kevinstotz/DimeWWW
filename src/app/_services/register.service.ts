import { Environment } from '../environments/index';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { GenericResponse, Register, RegisterVerify } from '../_models/index';


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

}
