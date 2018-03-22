import { Component, OnInit } from '@angular/core';
import {CalenderService} from './../../services/calender.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-time-slice-table',
  templateUrl: './time-slice-table.component.html',
  styleUrls: ['./time-slice-table.component.css']
})
export class TimeSliceTableComponent implements OnInit {

  private tableData:Object={};
  private prefData:any;
  private dateArray:any;
  private dateLength:Number=0;
  private toogleBox:any;
  private keyArray:Array<string>=[];
  private valueArray:Array<any>=[];
  
  constructor(private CalenderService:CalenderService) { 
    this.getPrefData()
    this.getTableData()
    
  }

  ngOnInit() {
  }
  getPrefData(){
    this.prefData=JSON.parse(sessionStorage.getItem('pref'))
    //this.prefData.unshift('date')
  }
  getTableData() {
    return this.CalenderService.tableData()
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
  showDetails(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id.nodeValue;
    console.log(idAttr);
  }
  
}