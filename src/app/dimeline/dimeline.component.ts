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
  private chart : Chart;
  private dimeDates = ["Value", "Date"];



  constructor(private dimeService: DimeService) {
  }

  deserialize(json, clazz) {
      var instance = new clazz();
      for(var prop in json) {
          if(!json.hasOwnProperty(prop)) {
              continue;
          }

          if(typeof json[prop] === 'object') {
              instance[prop] = this.deserialize(json[prop], clazz);
          } else {
              instance[prop] = json[prop];
          }
      }

      return instance;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    var items: any[] = [];
    var objs : object = {};
    this.dimeService.getDime()
      .subscribe(
          data => {
            for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              objs['x'] = new Date(obj.name);
              objs['y'] = <number> obj.value;
              console.log(objs);
              items.push(objs);
            }
            this.chart = new Chart('canvas', {
                type: 'line',
                data: [items],
                options: {
                  legend: {
                    display: true
                  },
                  scales: {
                    xAxes: [{
                      display: true
                    }],
                    yAxes: [{
                      display: true
                    }],
                  }
                }
              });
          },
          errorResponse => {
            console.log(errorResponse);
          }
      );
  }

}
