import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertService, DimeService } from '../_services/index';
import { Chart } from 'chart.js';
import { Dime } from '../_models/index';
import { Environment } from '../environments/index';

@Component({
  selector: 'app-dimepiechart',
  templateUrl: './dimepiechart.component.html',
  styleUrls: ['./dimepiechart.component.scss']
})
export class DimepiechartComponent implements OnInit {
  private pieChart : Chart;
  private environment: Environment;

  constructor(private dimeService: DimeService) {
    this.environment = new Environment();
  }

  ngOnInit() {
  }


 ngAfterViewInit() {
   var items : number[] = [];
   var backgroundColor : string[] =  ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];
   var labels : string[] = [];
   var pieOptions : object = {
      title: {
        display: false,
          text: 'Composition of The Dime'
      },
      tooltips: {
        xPadding: 8,
        yPadding: 8,
        borderWidth: 2,
        intersect: false,
        callbacks: {
           label: function(tooltipItem, data) {

             var symbol = data['labels'][tooltipItem.index];
             var value = parseFloat(data.datasets[0].data[tooltipItem.index]);
             return symbol + ': ' + value.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + '%';
           }
        }
     }
   };

   var pieData : object = {
       datasets: [{
         data: [10, 20, 30],
         backgroundColor: []
       }],
       labels: ['Red','Yellow','Blue']
   };

   this.dimeService.getPieChart(this.environment.global.DEFAULT_INDEX_FUND)
   .subscribe(
       data => {
          for (var i = 0; i < data.length; i++) {
               var obj = data[i];
               items[i] = +obj.value;
               labels[i] = String(obj.name);
          }
          pieData['datasets'] = [{
              data: items,
              backgroundColor: backgroundColor
          }];
          pieData['labels'] = labels;
          this.pieChart = new Chart('pie-canvas', {
             type: 'pie',
             data: pieData,
             options: pieOptions
          });
       },
       errorResponse => {
         console.log(errorResponse);
   });


   }

}
