import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { Dime, DimeLineChart, DimeTableChart, CoinNews } from '../_models/index';
import { Environment } from '../environments/index';
import 'rxjs/add/operator/map';

@Injectable()
export class DimeService {
    private environment: Environment;
    private httpOptions: object;

    constructor(private http: HttpClient) {
        this.environment = new Environment();
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    getPieChart(chart: number) {
        return this.http.get<Dime[]>(this.environment.api.DIME_PIE_CHART_URL + chart + "/", this.httpOptions);
    }

    getLineChart(chart: number) {
        return this.http.get<DimeLineChart[]>(this.environment.api.DIME_LINE_CHART_URL + chart + "/", this.httpOptions);
    }

    getTableChart(chart: number) {
        return this.http.get<DimeTableChart[]>(this.environment.api.DIME_TABLE_CHART_URL + chart + "/", this.httpOptions);
    }

    getCoinNews(chart: number): Observable<CoinNews[]> {
        return this.http.get<CoinNews[]>(this.environment.api.COIN_NEWS_URL + chart + "/", this.httpOptions).map( (response: any) => {
            if (!response) {
              console.log("no response");
              return false;
            }
            if ( (!response.status) || (!response.message) ) {
              console.log("no response or status");
              return false;
            }
            if (+response.status != 0) {
              console.log("status != 0");
              return false;
            }
            if (+response.message != 0) {
              console.log("message != 0");
              return false;
            }
            return JSON.parse(response.result);
          },
        error => {
            console.log(error);
        });
    }
// 781-647-1430
}
