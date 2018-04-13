import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { DimeService } from '../_services/index';
import { Environment } from '../environments/index';
import { FundTableChart, GenericResponse } from '../_models/index';

@Component({
  selector: 'app-bodypart3',
  templateUrl: './bodypart3.component.html',
  styleUrls: ['./bodypart3.component.css']
})
export class Bodypart3Component implements OnInit {
  private isLoadingResults = true;
  private carouselTileItems: Array<FundTableChart>;
  private carouselTile: NgxCarousel;
  private environment: Environment;

  constructor(private dimeService: DimeService) {
    this.environment = new Environment();
    this.dimeService.getTableChart(this.environment.global.DEFAULT_INDEX_FUND)
    .subscribe(
       ( dimeTableChart : FundTableChart[] ) => {
         this.carouselTileItems = dimeTableChart;
         this.isLoadingResults = false;
       },
       ( errorResponse: GenericResponse) => {
         this.isLoadingResults = false;
         console.log(errorResponse);
    });
  }

  ngOnInit() {

     this.carouselTile = {
       grid: {xs: 1, sm: 2, md: 3, lg: 5, all: 0},
       slide: 2,
       speed: 1000,
       interval: 5000,
       animation: 'lazy',
       point: {
         visible: true,
         pointStyles: `
           .ngxcarouselPoint {
             list-style-type: none;
             text-align: center;
             padding: 12px;
             margin: 0;
             white-space: nowrap;
             overflow: auto;
             box-sizing: border-box;
           }
           .ngxcarouselPoint li {
             display: inline-block;
             border-radius: 50%;
             border: 2px solid rgba(0, 0, 0, 0.55);
             padding: 4px;
             margin: 0 3px;
             transition-timing-function: cubic-bezier(.17, .67, .83, .67);
             transition: .4s;
           }
           .ngxcarouselPoint li.active {
               background: #6b6b6b;
               transform: scale(1.2);
           }
         `
       },
       load: 2,
       loop: true,
       touch: false,
       easing: 'ease'
     }
   }

   public carouselTileLoad(evt: any) {
     const len = this.carouselTileItems.length
       for (let i = len; i < len ; i++) {
         //this.carouselTileItems.push(i);
       }
   }


}
