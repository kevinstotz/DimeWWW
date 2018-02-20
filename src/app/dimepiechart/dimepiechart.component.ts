import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AlertService, DimeService } from '../_services/index';


@Component({
  selector: 'app-dimepiechart',
  templateUrl: './dimepiechart.component.html',
  styleUrls: ['./dimepiechart.component.scss']
})
export class DimepiechartComponent implements OnInit {

   ngOnInit() {
   }

   formatTooltipText() {

   }

   single: any[];
   view: any[] = [600, 400];

   // options
   showLegend = true;
   legendTitle = "Currency";
 // domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   colorScheme = {
     domain: ['#7FC881', '#C0ACD7', '#FCC188', '#FEFF96', '#386BB3']
   };

   // pie
   showLabels = true;
   explodeSlices = false;
   doughnut = false;
   showGradient = false;
   animations = true;

   constructor(private dimeService: DimeService) {
     this.dimeService.getPieChart()
     .subscribe(
         data => {
           var single = data ;
           Object.assign(this, {single });
         },
         errorResponse => {
           console.log(errorResponse);
     });
     var single = [];
     Object.assign(this, { single });
  }

   onSelect(event) {
     console.log(event);
   }

}