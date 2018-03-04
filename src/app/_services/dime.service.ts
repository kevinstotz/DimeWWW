import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { Dime, DimeLineChart } from '../_models/index';
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

    getPieChart() {
        return this.http.get<Dime[]>(this.environment.api.DIME_PIE_CHART, this.httpOptions);
    }

    getLineChart() {
        return this.http.get<DimeLineChart[]>(this.environment.api.DIME_LINE_CHART, this.httpOptions);
    }

    getTableChart() {
        return this.http.get<DimeLineChart[]>(this.environment.api.DIME_TABLE_CHART, this.httpOptions);
    }

}
