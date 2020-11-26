import { PopoverComponent } from './../popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  username = 'Default';
  loggedin = sessionStorage.getItem("loggedin");
  constructor(private popCtrl: PopoverController, public router: Router) { 

  }

  ngOnInit() {}

  async openMenu(ev: any){
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      event: ev,
    });

    return await popover.present();
  }


  login(){

  }
}
