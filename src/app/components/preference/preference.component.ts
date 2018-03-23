import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  data: any = '';
  headerValue: any = '';
  prefernceArray: Array<String> = [];
  title = 'prakash';
  temp: Array<String> = [];
  // test
  constructor(private preferencesService: PreferencesService, private router: Router) {
    this.getPrefernceData();
   // this.prefernceSelected();
  }
  ngOnInit() {
    // const data = this.dataService.dummyObject;
  }
  selectedprefernce($event) {
     // console.log($event.target.value);
     if ($event.target.checked && this.temp.indexOf($event.target.value) === -1) {
        this.temp.push($event.target.value);
     } else {
      const index = this.temp.indexOf($event.target.value);
      this.temp.splice(index, 1);
     }
     console.log(this.temp);
  }
  getPrefernceData() {
    return this.preferencesService.myData()
    .subscribe(data => {
      this.data = data;
      this.headerValue = Object.keys(data);
      for (const prop of this.headerValue) {
       this.prefernceArray.push(this.data[prop]);
      }
      console.log(this.prefernceArray);
     });
  }
  prefernceSelected() {
    sessionStorage.setItem('pref', JSON.stringify(this.temp));
    console.log(sessionStorage.getItem('pref'));
    this.router.navigate(['timeslice/classic-view']);
  }
}
