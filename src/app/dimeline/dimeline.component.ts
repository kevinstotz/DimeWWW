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
                  let t:number =  parseFloat(value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
                  document.getElementById("value").innerHTML = String(t);
                  return label + ' -> '+ value;
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
