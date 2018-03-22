import { Component, OnInit } from '@angular/core';
import {CalenderService} from '../../services/calender.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  dateData: any = [];
  constructor(private CalenderService: CalenderService) {
    this.getDateData();
  }

  ngOnInit() {
  }
  getDateData() {
    return this.CalenderService.tableData()
    .subscribe(data => {
      this.dateData = data;
      console.log(this.dateData.date);
     });
  }
}
