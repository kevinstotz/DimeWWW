import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Dime } from '../_models/index';
import { AlertService, DimeService } from '../_services/index';

@Component({
  selector: 'app-dimeline',
  templateUrl: './dimeline.component.html',
  styleUrls: ['./dimeline.component.scss']
})

export class DimelineComponent implements OnInit {
  private lineChart : Chart;
  private lineLabels : any[] = [];
  private lineData : number[] = [];
  private lineOptions : object = {
     title: {
       display: false,
         text: 'Composition of The Dime'
     },
     scales: {
           xAxes: [{
               type: 'time',
               distribution: 'series',
               time: {
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                }
           }]
       },
       tooltips: {}
  };

  private lineDataObject : object = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: '',
            label: '',
            borderColor: "#3e95cd",
            fill: false
        }]
     },
     options: this.lineOptions
  };

  constructor(private dimeService: DimeService) {

  }

  ngOnInit() {}

  ngAfterViewInit() {
    var items: any[] = [];
    var objs : object = {};
    var dateLabels : Date[] = [];

    this.dimeService.getDime()
      .subscribe(
          data => {
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                dateLabels[i] = new Date(obj.name);
                this.lineData[i]  = obj.value;
            }

            this.lineDataObject['data']['labels'] = dateLabels;
            this.lineDataObject['data']['datasets'] = [{ data: this.lineData, label: 'The DIME', borderColor: "#3e95cd", fill: false }];
            this.lineChart = new Chart('line-chart', this.lineDataObject ) ;
          },
          errorResponse => {
            console.log(errorResponse);
          }
      );
  }

}
