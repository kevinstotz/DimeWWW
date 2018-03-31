import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { AlertService, DimeService } from '../_services/index';


@Component({
  selector: 'app-dimetable',
  templateUrl: './dimetable.component.html',
  styleUrls: ['./dimetable.component.scss']
})
export class DimetableComponent implements OnInit {
  displayedColumns = ['number', 'name', 'price', 'percentage', 'market_cap'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dimeService: DimeService) { }

  ngOnInit() {
    this.isLoadingResults = true;
    // If the user changes the sort order, reset back to the first page.
    this.dimeService.getTableChart(153)
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
