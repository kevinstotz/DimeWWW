import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Environment } from '../environments/index';


@Injectable()
export class UserService {
    private environment: Environment;
    private loggedin: boolean;
    private loading: boolean;
    private cookieOptions: CookieOptions;
    private httpOptions: object;

    constructor(
      private http: HttpClient,
      private cookieService: CookieService) {
          this.environment = new Environment();
          this.loggedin = false;
          this.loading = false;
          this.cookieOptions = { domain: this.environment.global.DOMAIN };
          this.httpOptions = {
              headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
    }

    getIdByUsername(username: string) {
        return this.http.post(this.environment.api.GET_USER_ID_URL, {Username: username} )
            .subscribe( (response: any) => {
                if (!response) {
                  window.location.href=this.environment.global.WEBSITE_URL;
                  return false;
                }
                if ( (!response.status) || (!response.message) ) {
                  window.location.href=this.environment.global.WEBSITE_URL;
                  return false;
                }
                if (+response.status != 0) {
                  window.location.href=this.environment.global.WEBSITE_URL;
                  return false;
                }
                if (+response.message > 0) {
                  localStorage.setItem('Id', JSON.stringify({userId: response.message}));
                  sessionStorage.setItem('Id', JSON.stringify({userId: response.message}));
                  this.cookieService.put('Id', JSON.stringify({userId: response.message}), this.cookieOptions);
                  this.loggedin = true;
                  window.location.href=this.environment.global.DASHBOARD_URL;
                  return false;
                }

                return response;
            },
            error => {
                console.log(error);
                this.loading = false;
            });
    }

}
