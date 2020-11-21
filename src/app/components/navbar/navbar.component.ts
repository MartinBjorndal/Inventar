import { PopoverComponent } from './../popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  username = 'Default';
  loggedin = true;
  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {}


  async openMenu(ev: any){
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      event: ev,
    });

    return await popover.present();
  }

  login(){}
}
