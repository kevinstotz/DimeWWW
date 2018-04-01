import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AlertService, DimeService } from '../_services/index';
import { DimeLineChart } from '../_models/index';
import { Environment } from '../environments/index';


@Component({
  selector: 'app-dimeline',
  templateUrl: './dimeline.component.html',
  styleUrls: ['./dimeline.component.scss']
})

export class DimelineComponent implements OnInit {
  private lineChart : Chart;
  private environment: Environment;
  public displayData : Object = { name: "kevin", value: 94, timestamp: 43 };
  private lineLabels : any[] = [];
  private lineData : number[] = [];

  private lineOptions : object = {
     title: {
       display: false,
         text: 'Composition of The Fund'
     },
     scales: {
          xAxes: [
             {
               type: 'time',
               distribution: 'series',
               time: {
                    displayFormats: {
                        quarter: 'MM YY'
                      }
                    }
              }
            ],
          yAxes: [
            {
              ticks: {
                    callback: function(label, index, labels) {
                        return '$'+label/100+'k';
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Net Asset Value'
                }
            }
          ]
     },
     tooltips: {
       xPadding: 8,
       yPadding: 8,
       borderWidth: 2,
       intersect: false,
       callbacks: {
                label: function(tooltipItem, data) {
                  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  var dateObject = new Date(data['labels'][tooltipItem.index]);
                  var label = document.getElementById("date").innerHTML = 'Date: ' + months[dateObject.getMonth()] + ' ' + dateObject.getDate() + ', ' + dateObject.getYear();
                  var value = 10.0 * parseFloat(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                  let t:string = value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                  document.getElementById("value").innerHTML = 'Value: ' + t;
                  return label + ' -> $'+ t;
                },
                title: function(tooltipItem, data) {
                    return;
                },
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 255, 0)',
                        backgroundColor: 'rgb(255, 255, 0)'
                    }
                },
                labelTextColor:function(tooltipItem, chart){
                    return '#FFF';
                },
                footer: function(tooltipItem, data) {
                  return;
                }
        }
     }
  };

  private lineDataObject : object = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: '',
            label: 'label',
            borderColor: "#21b082",
            fill: false
        }]
     },
     options: this.lineOptions
  };


  constructor(private dimeService: DimeService) {
    this.environment = new Environment();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    var dateLabels : Date[] = [];
    var pointBackgroundColors = [];
    var pointHoverRadius = [];
    var pointRadius = [];

    this.dimeService.getLineChart(this.environment.global.DEFAULT_INDEX_FUND)
      .subscribe(
          data => {
            let dimeLineChart: DimeLineChart;
            for (var i = 0; i < data.length; i++) {
                dimeLineChart = data[i];
                dateLabels[i] = new Date(dimeLineChart.name + ' 00:00:00');
                this.lineData[i]  = dimeLineChart.value;
                if (dimeLineChart.rebalance == 0) {
                  pointBackgroundColors[i]= "#FFF100";
                  pointHoverRadius[i] = 4;
                  pointRadius[i] = 1;
                } else {
                  pointBackgroundColors[i]= "#BE0081";
                  pointHoverRadius[i] = 8;
                  pointRadius[i] = 3;
                }
            }

            this.lineDataObject['data']['labels'] = dateLabels;
            this.lineDataObject['data']['datasets'] = [{ data: this.lineData, pointRadius: pointRadius, pointHoverRadius: pointHoverRadius, pointBackgroundColor: pointBackgroundColors, label: 'The UD10', borderColor: "#21b082", fill: false }];
            this.lineChart = new Chart('line-chart', this.lineDataObject ) ;
          },
          errorResponse => {
            console.log(errorResponse);
          }
      );
  }

}
