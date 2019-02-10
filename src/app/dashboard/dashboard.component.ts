import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataDoughnut: any;
  dataPolar: any;
  dataRadar: any;
  dataBar: any;
  dataLine: any;
  items: any[];

  title:string = "321";

  constructor() {

    this.dataDoughnut = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };


    this.dataPolar = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
      ]
    }

    this.dataRadar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    this.dataBar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }


  }



  clicks: number = 0;

  ngOnInit() {

    this.items = [
      {
          label: 'Lines', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      items: [{label: 'Line 1', command: "handleClick()"},
                              {label: 'Line 2'},
                              {label: 'Line 3'},
                              {label: 'Line 4'}]
                  }
              ]
          ]
      },
      {
          label: 'Summary', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'Sum 1',
                      items: [{label: 'Sum 1.1'},{label: 'Sum 1.2'}]
                  },
                  {
                      label: 'Sum 2',
                      items: [{label: 'Sum 2.1'},{label: 'Sum 2.2'}]
                  }
              ]
          ]
      },
      {
      label: 'Debug', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      items: [{label: 'Debug 1'},
                              {label: 'Debug 2'}]
                  }
              ]
          ]
      },
  ];
  }

  handleClick() {
    this.clicks++;
  }

}
