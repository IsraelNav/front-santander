import { Component } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-chart-product',
  templateUrl: './chart-product.component.html',
  styleUrl: './chart-product.component.css'
})
export class ChartProductComponent {
  public chart: any;
  public listLocal:Product[] = [];
  public dateList:Date[] = [];
  public dateCount: number[] = [];

  ngOnInit(): void {
    this.listLocal = JSON.parse(localStorage.getItem('products')!);
    this.listLocal.forEach(element => {
      this.dateList.push(element.date);
    });

    this.dateList.forEach((v,i)=> {
      this.dateCount[i] = (this.dateCount[i] || 0) + 1;
    });

    console.log(this.dateCount);
    this.createChart(this.dateList, this.dateCount);

  }

  createChart(labels: any, data: any) {

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Products',
            data: data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
