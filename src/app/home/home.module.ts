

import { ProfilComponent } from './../profil/profil.component';
import { UtsjekkComponent } from './../utsjekk/utsjekk.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { LoginFormComponent } from './../components/login-form/login-form.component';

import { HomePageRoutingModule } from './home-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { InnsjekkComponent } from '../innsjekk/innsjekk.component';
import { PopoverComponent } from '../components/popover/popover.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    LoginFormComponent,
    AdminComponent,
    UtsjekkComponent,
    ProfilComponent,
    InnsjekkComponent,
    PopoverComponent,
    LogoutComponent],
  exports: [NavbarComponent]
})
export class HomePageModule {}
