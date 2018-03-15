import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   model: any = {};
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   constructor(
     private renderer: Renderer,
     private router: Router
   ) {
     //adding page specific class to body tag
     this.renderer.setElementClass(document.body, 'login', true);
   }
   ngOnDestroy() {
       this.renderer.setElementClass(document.body, 'login', false);
   }
  ngOnInit() {
  }
  login(){
    console.log('This is Login')
    this.router.navigate(['timeslice/preference']);
  }

}
