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
    referenceLines = [];
    view = [1024, 600];
    showXAxis = true;
    showRefLabels = true;
    showRefLines = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    private activeEntries : any[] = [];
    showXAxisLabel = true;
    xAxisLabel = '';
    timeline = true;
    showYAxisLabel = true;
    yAxisLabel = 'Net Asset Value';
    autoScale = true;
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };


    constructor(private dimeService: DimeService) {
/*
      this.dimeService.getRebalanceDatesAndValues()
        .subscribe(
            data => {
              console.log(data);
              this.activeEntries =  = [{name: "2017-03-23", value:"14.20", series: "value"}];
            },
            errorResponse => {
              console.log(errorResponse);
            }
        );
*/

        this.dimeService.getTableChart()
          .subscribe(
              data => {
                var multi = [ {
                    "name": "value",
                    "series":  data } ];
                Object.assign(this, { multi });
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
      if ((date1.getDate() >= 11) && (date1.getDate() <= 19))  {
        return monthNames[date1.getMonth()] + " " + date1.getFullYear();
      }
      return "";
    }

    yAxisTickFormatting(value){

          var formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              // the default value for minimumFractionDigits depends on the currency
              // and is usually already 2
          });

      return formatter.format(value);
    }

    onSelect(event) {
        console.log(event);
    }

}
