import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericResponse, Newsletter } from '../_models/index';
import { GlobalVariable } from '../globals/globals';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsletterService {
    constructor(private http: HttpClient) { }

    subscribeNewsletter(newsletter: Newsletter):Observable<GenericResponse> {
        return this.http.post<GenericResponse>(GlobalVariable.NEWSLETTER_URL, newsletter, httpOptions);
    }
}
