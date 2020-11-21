import { ProfilComponent } from './profil/profil.component';
import { UtsjekkComponent } from './utsjekk/utsjekk.component';
import { InnsjekkComponent } from './innsjekk/innsjekk.component';

import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'innsjekk',
    component: InnsjekkComponent
  },
  {
    path: 'utsjekk',
    component: UtsjekkComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
