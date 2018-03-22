
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {CalenderService} from './../../services/calender.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-time-slice-table',
  templateUrl: './time-slice-table.component.html',
  styleUrls: ['./time-slice-table.component.css']
})
export class TimeSliceTableComponent implements OnInit , AfterViewInit {
  public colors = ['#ffa500'];

  private tableData: Object = {};
  private prefData: any;
  private dateArray: any;
  private dateLength: Number = 0;
  private toogleBox: any;
  private keyArray: Array<string> = [];
  private valueArray: Array<any> = [];
  constructor(private CalService: CalenderService) {
    this.getPrefData();
    this.getTableData();
  }
  @ViewChild('someInput') el: ElementRef;
  public  dataColumns = [1];
  public  barChartData = [{
      id: 0,
      label: '0',
      value1: 2,
   }, {
    id: 1,
    label: '1',
    value1: 4,
 }, {
  id: 2,
 label: '2',
  value1: 6,
}, {
  id: 3,
   label: '3',
  value1: 4,
}, {
      id: 4,
      label: '4',
      value1: 2,
   }];

   ngAfterViewInit() {
     console.log(typeof document.querySelector('g.x.axis'));
   }
  ngOnInit() {
  }
  getPrefData() {
    this.prefData = JSON.parse(sessionStorage.getItem('pref'));
  }
  getTableData() {
    return this.CalService.tableData()
    .subscribe(data => {
      this.tableData = data;
      for (let prop in this.tableData) {  
        this.keyArray.push(prop);
        this.valueArray.push(this.tableData[prop])
        var temp=this.keyArray.indexOf('date')
        this.keyArray[temp]='Events'
      }   
     });
  }
  showDetails(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id.nodeValue;
    console.log(idAttr);
  }
}

