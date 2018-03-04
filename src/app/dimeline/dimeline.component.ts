import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AlertService, DimeService } from '../_services/index';

@Component({
  selector: 'app-dimeline',
  templateUrl: './dimeline.component.html',
  styleUrls: ['./dimeline.component.scss']
})

export class DimelineComponent implements OnInit {
  private lineChart : Chart;
  public displayData : Object = { name: "kevin", value: 94, timestamp: 43 };
  private lineLabels : any[] = [];
  private lineData : number[] = [];

  private lineOptions : object = {
     title: {
       display: false,
         text: 'Composition of The Dime'
     },
     scales: {
          xAxes: [
             {
               type: 'time',
               distribution: 'series',
               time: {
                    displayFormats: {
                        quarter: 'MMM YYYY'
                      }
                    }
              }
            ],
          yAxes: [
            {
              ticks: {
                    callback: function(label, index, labels) {
                        return '$'+label/1000+'k';
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
                  var label = document.getElementById("date").innerHTML = 'Date: ' + months[dateObject.getMonth()] + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear();
                  var value = parseFloat(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                  let t:string = value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                  document.getElementById("value").innerHTML = t;
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

  }

  ngOnInit() {}

  ngAfterViewInit() {
    var dateLabels : Date[] = [];
    var pointBackgroundColors = [];
    var pointHoverRadius = [];
    var pointRadius = [];

    this.dimeService.getLineChart()
      .subscribe(
          data => {
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                dateLabels[i] = new Date(obj.name + ' 00:00:00');
                this.lineData[i]  = obj.value;
                if (obj.rebalance == 0) {
                  pointBackgroundColors[i]= "#FFF100";
                  pointHoverRadius[i] = 4;
                  pointRadius[i] = 2;
                } else {
                  pointBackgroundColors[i]= "#BE0081";
                  pointHoverRadius[i] = 8;
                  pointRadius[i] = 6;
                }
            }

            this.lineDataObject['data']['labels'] = dateLabels;
            this.lineDataObject['data']['datasets'] = [{ data: this.lineData, pointRadius: pointRadius, pointHoverRadius: pointHoverRadius, pointBackgroundColor: pointBackgroundColors, label: 'The DIME', borderColor: "#21b082", fill: false }];
            this.lineChart = new Chart('line-chart', this.lineDataObject ) ;
          },
          errorResponse => {
            console.log(errorResponse);
          }
      );
  }

}
