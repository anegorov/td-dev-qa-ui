import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  constructor() { 


  }
  num: string;
  sales: any[];
  valueDate: Date;
  equipment: any[];
  selectedCity: any;
  eqevent: any[];
  selectedEvent: any;

  ngOnInit() {
      this.sales = [
          { brand: '010101', lastYearSale: '01.01.2018 08:00', thisYearSale: 'Ок', lastYearProfit: 'SkyNet', thisYearProfit: 'ручное' }
      ];

      this.equipment = [
        {name: 'Надо', code: 'NY'},
        {name: 'Чем-то', code: 'RM'},
        {name: 'Заполнить', code: 'PRS'}
      ];

      this.eqevent = [
        {name: 'Надо', code: 'NY'},
        {name: 'Чем-то', code: 'RM'},
        {name: 'Заполнить', code: 'PRS'}
      ];
  }

  fillTable(){
    this.sales.push({ brand: this.num, lastYearSale: this.valueDate, thisYearSale: this.selectedCity.name, lastYearProfit: this.selectedEvent.name, thisYearProfit: 'Что сюда?' });
  }

}
