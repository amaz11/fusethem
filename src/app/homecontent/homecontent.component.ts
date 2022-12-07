
import { Component, OnInit,ViewChild } from '@angular/core';
import * as apex from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.scss']
})
export class HomecontentComponent implements OnInit {

  series!: apex.ApexAxisChartSeries;
  chart!: apex.ApexChart;
  title!: apex.ApexTitleSubtitle;
  legend!: apex.ApexLegend;
  responsive!: apex.ApexResponsive
  constructor() {}

  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    this.title = {
      text: ''
    };

    this.series = [{
      name: 'Java',
      data: [12, 10, 19]
    }, {
      name: 'Python',
      data: [23, 18, 20]
    }];

    this.chart = {
      type: 'bar',
      width: "100%",
      height:350
    };

    this.legend = {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      showForSingleSeries: true,
      onItemClick: {
        toggleDataSeries: false
      }
    };
    // this.responsive= {
    //   breakpoint: 400,
    //   options: {
    //     chart: {
    //       width: 100,
    //     },
    //   },
  // }
  }

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: false
    },
    width:"100%"
  };

  chartLabels = ["Apple", "Microsoft", "Facebook", "Google"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Leading Companies',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true,
    
  };
}
