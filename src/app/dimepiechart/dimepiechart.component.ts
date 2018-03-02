import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertService, DimeService } from '../_services/index';
import { Chart } from 'chart.js';
import { Dime } from '../_models/index';


@Component({
  selector: 'app-dimepiechart',
  templateUrl: './dimepiechart.component.html',
  styleUrls: ['./dimepiechart.component.scss']
})
export class DimepiechartComponent implements OnInit {
  private pieChart : Chart;

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
        }
     };

     var pieData : object = {
         datasets: [{
           data: [10, 20, 30],
           backgroundColor: []
        }],
         labels: ['Red','Yellow','Blue']
     };

     this.dimeService.getPieChart()
     .subscribe(
         data => {
            for (var i = 0; i < data.length; i++) {
                 var obj = data[i];
                 items[i] = +obj.value;
                 labels[i] = obj.name;
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

   constructor(private dimeService: DimeService) {
     this.dimeService.getPieChart()
     .subscribe(
         data => {

         },
         errorResponse => {
           console.log(errorResponse);
     });
  }


}
