
import { NavbarComponent } from './../components/navbar/navbar.component';


import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  loggedin = sessionStorage.getItem("loggedin");
 
  constructor() {

  }

  login(){
  }




}
