import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { AlertService, DimeService } from '../_services/index';
import { Environment } from '../environments/index';

@Component({
  selector: 'app-dimetable',
  templateUrl: './dimetable.component.html',
  styleUrls: ['./dimetable.component.scss']
})
export class DimetableComponent implements OnInit {
  private displayedColumns = ['number', 'name', 'price', 'percentage', 'market_cap'];
  private dataSource = new MatTableDataSource();
  private environment: Environment;
  private resultsLength = 0;
  private isLoadingResults = true;
  private isRateLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dimeService: DimeService) {
    this.environment = new Environment();
  }

  ngOnInit() {
    this.isLoadingResults = true;
    // If the user changes the sort order, reset back to the first page.
    this.dimeService.getTableChart(this.environment.global.DEFAULT_INDEX_FUND)
    .subscribe(
        data => {
          //this.dataSource = data;
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          //this.resultsLength = data.total_count;
        },
        errorResponse => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          console.log(errorResponse);
    });
  }

}
