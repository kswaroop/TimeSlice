import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { TimeSliceTableComponent } from './components/time-slice-table/time-slice-table.component';
import { TimeSliceButtonComponent } from './components/time-slice-button/time-slice-button.component';
import { CalenderComponent } from './components/calender/calender.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'timeslice', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'preference', pathMatch: 'full' },
      { path: 'preference', component: PreferenceComponent },
      { path: 'preferenceToggle', component: TimeSliceButtonComponent },
      { path: 'calender', component: CalenderComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
