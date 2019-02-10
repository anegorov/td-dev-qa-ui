import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from "../http.service";
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

  @Input() env: string;
  tests:any;

  constructor( private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getTests().toPromise()
    .then(tests => this.tests = tests);
    }
  
}
