
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {CalenderService} from './../../services/calender.service';
import { forEach } from '@angular/router/src/utils/collection';
import { GraphDataService } from '../../services/graph-data.service';


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
  private circleGraphData: any = 0;
  private tempArray: any = [];
  public chartData: Array<any> = [];
  public barChartData: Array<any>  = [];
  public barChartFlag: any = false;
  constructor(private CalService: CalenderService, private grapData: GraphDataService) {
    this.getPrefData();
    this.getTableData();
    this.getGraphData();
  }
  @ViewChild('someInput') el: ElementRef;
  public  dataColumns = [1];

 public  barChartData1 = [{
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

   ngAfterViewInit() {}
  ngOnInit() {
  }
  getGraphData() {
    return this.grapData.graphData()
    .subscribe(data => {
       this.circleGraphData = data.Topic2;
       this.chartData = data .Statistics;
       this.chartData.forEach((item, index) => {
        const arr = {
          id: index,
          label: index + '',
          value1: item,
        //  columnDetails: [undefined, undefined, {name: 'value1', column: 'column1', yBegin: 0, yEnd: item }],
         // total: item,
         };
         this.tempArray.push(arr);
         this.barChartData = this.tempArray;
    });
       console.log(this.barChartData);
       console.log(this.barChartData1);
       this.barChartFlag = true;
     });
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
  }
}

