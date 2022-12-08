import { Component, OnInit, ViewChild } from '@angular/core';
import * as apex from 'ng-apexcharts';

@Component({
  selector: 'app-budgetcontent',
  templateUrl: './budgetcontent.component.html',
  styleUrls: ['./budgetcontent.component.scss'],
})
export class BudgetcontentComponent implements OnInit {
  series!: apex.ApexAxisChartSeries;
  chart!: apex.ApexChart;
  title!: apex.ApexTitleSubtitle;
  xaxis!: apex.ApexXAxis;

  constructor() {}

  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    this.series = [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ];
    this.chart = {
      height: 250,
      width: 450,
      type: 'radar',
    };
    this.title = {
      text: '',
    };
    this.xaxis = {
      categories: ['January', 'February', 'March', 'April', 'May', 'June'],
    };
  }
}
