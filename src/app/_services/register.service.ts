import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { GenericResponse, Register, RegisterVerify } from '../_models/index';
import { GlobalVariable } from '../globals/globals';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(register: Register) {
      return this.http.post<GenericResponse>(GlobalVariable.REGISTER_URL, register, httpOptions);
  }

  verifyRegisterEmail(registerVerify: RegisterVerify) {
      return this.http.get<GenericResponse>(GlobalVariable.REGISTER_VERIFY_URL + registerVerify.authentication_code, httpOptions);
  }

}
