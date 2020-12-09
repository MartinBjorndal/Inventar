import { UtsjekketComponent } from './components/utsjekket/utsjekket.component';
import { AdminComponent } from './admin/admin.component';
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
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'utsjekket',
    component: UtsjekketComponent
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
