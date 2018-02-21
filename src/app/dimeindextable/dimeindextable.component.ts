import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AlertService, DimeService } from '../_services/index';

@Component({
  selector: 'app-dimeindextable',
  templateUrl: './dimeindextable.component.html',
  styleUrls: ['./dimeindextable.component.css']
})
export class DimeindextableComponent {

    multi: any[];
    view = [800, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    //xAxisLabel = 'Date';
    timeline = true;
    showYAxisLabel = true;
    yAxisLabel = 'Value';
    autoScale = true;
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };


    constructor(private dimeService: DimeService) {
        this.dimeService.getDime()
          .subscribe(
              data => {
                var multi = [ {
                    "name": "Value",
                    "series":  data } ];
                Object.assign(this, {multi });
              },
              errorResponse => {
                console.log(errorResponse);
              }
          );
        var multi = [];
        Object.assign(this, { multi });
    }


    xAxisTickFormatting(value){
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var date1 = new Date(value);
      return monthNames[date1.getMonth()] + " " + date1.getFullYear();

    }

    yAxisTickFormatting(value){

          var formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              // the default value for minimumFractionDigits depends on the currency
              // and is usually already 2
          });

      return formatter.format(value);
    }

    onSelect(event) {
        console.log(event);
    }

}
