import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GraphDataService {

  constructor(private http: HttpClient) { }
  url = 'assets/graph.json';
  graphData() {
    return this.http.get(this.url);
  }
}
