import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalenderService {

  constructor(private http: HttpClient) { }
  url= 'assets/date.json';
  dateData() {
    return this.http.get(this.url);
  }

}
