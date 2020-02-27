import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OpprotunitesComponent } from '../components/opprotunites/opprotunites.component';
import { CreateTenderComponent } from '../components/create-tender/create-tender.component';
const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: 'opprotunites', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
   { path: 'opprotunites', component: OpprotunitesComponent, data: { state: 'opprotunites' } },
   { path: 'opprotunites/CreateTender', component: CreateTenderComponent, data: { state: 'CreateTender' } },
  // { path: 'home', component: HomeComponent, data: { state: 'home' }, canActivate: [AlwaysAuthGuard] },
  // { path: '404', component: PagenotfoundComponent, data: { state: 'home' } },
];
export const APP_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES, { useHash: false });
