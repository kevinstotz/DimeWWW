import { Environment } from '../environments/index';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericResponse, Newsletter } from '../_models/index';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsletterService {
    private environment: Environment;

    constructor(private http: HttpClient) {
      this.environment = new Environment();
  }

    subscribeNewsletter(newsletter: Newsletter):Observable<GenericResponse> {
        return this.http.post<GenericResponse>(this.environment.api.NEWSLETTER_URL, newsletter, httpOptions);
    }
}
