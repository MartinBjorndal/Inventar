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
  loggedin = true;
  constructor(private popCtrl: PopoverController, public router: Router) { 
   
  }
  

divStyle = {
  width: "320px" //Initial width
 }
 customWidth: any;
 
 @HostListener('window:resize')
 public detectResize(): void {
      this.customWidth = document.getElementById('element').offsetWidth
      // Do you magic here ...
      this.divStyle = {
      width: this.customWidth - 20 + "px"
  }
 }

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
