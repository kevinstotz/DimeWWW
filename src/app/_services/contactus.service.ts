import { Environment } from '../environments/index';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericResponse, Contactus } from '../_models/index';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactusService {

  private environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
}

  send(contactus: Contactus):Observable<GenericResponse> {
      return this.http.post<GenericResponse>(this.environment.api.CONTACTUS_URL, contactus, httpOptions);
  }



  //displayDialog(message) {
  //  let dialogRef = this.dialog.open(ContactusResponseDialogComponent, {
  //     height: '80px',
  //     width: '200px',
  //     data: { message: message }
  // });
//  }

}
