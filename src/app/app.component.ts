import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
// import {PanelComponent} from 'panel/app-panel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SD QA Dashboard';
  items: MenuItem[];
  page: string = '0';

  dev: string = 'dev';
  int: string = 'int';

  ngOnInit() {
    
    }

}
