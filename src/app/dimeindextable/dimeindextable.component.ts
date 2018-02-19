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

    view: any[] = [500, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Date';
    showYAxisLabel = true;
    yAxisLabel = 'Earnings';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // line, area
    autoScale = true;

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
        });
      var multi = [];
      Object.assign(this, { multi });
    }

    onSelect(event) {
        console.log(event);
    }

}
