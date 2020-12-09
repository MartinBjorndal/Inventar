import { AppModule } from './../app.module';
import { ProfilComponent } from './../profil/profil.component';
import { UtsjekkComponent } from './../utsjekk/utsjekk.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { LoginFormComponent } from './../components/login-form/login-form.component';

import { HomePageRoutingModule } from './home-routing.module';

import { InnsjekkComponent } from '../innsjekk/innsjekk.component';
import { PopoverComponent } from '../components/popover/popover.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { UtsjekketComponent } from '../components/utsjekket/utsjekket.component';
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
    LoginFormComponent,
    UtsjekkComponent,
    ProfilComponent,
    InnsjekkComponent,
    PopoverComponent,
    UtsjekketComponent,
    LogoutComponent],
  exports: []
})
export class HomePageModule {}
