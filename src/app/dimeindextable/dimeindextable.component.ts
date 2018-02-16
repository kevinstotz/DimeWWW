import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from '../data';

@Component({
  selector: 'app-dimeindextable',
  templateUrl: './dimeindextable.component.html',
  styleUrls: ['./dimeindextable.component.css']
})
export class DimeindextableComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Earnings';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }

}
