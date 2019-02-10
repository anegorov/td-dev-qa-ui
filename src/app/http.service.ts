import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // url:string = `https://api.binance.com/api/v3/ticker/price`
  url:string = `https://td-jv-qa-backend.run.aws-usw02-pr.ice.predix.io/api/qa`;
  tests:any = [
    {name:'test1', status:'passed', data:'10.10.2018'},
    {name:'test2', status:'passed', data:'12.10.2018'},
    {name:'test3', status:'failed', data:'13.10.2018'}
  ];

  getTests(): Observable<any>{
    return this.http.get(this.url, {
      headers:{'Content-Type': 'application/json'}
    });
  }

  getData(curr:string): Observable<any>{
    return this.http.get(this.url,{
      params: {
        symbol: curr
      },
      headers:{'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, PUT, POST"
    }
    });
  }
}
