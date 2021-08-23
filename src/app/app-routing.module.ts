import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import { StatsComponent } from './components/stats/stats.component';
import {AuthGuardService} from "./shared/services/auth-guard.service";

const routes: Routes = [
{path:'',pathMatch:'full',redirectTo: '/login'},
{path:'login',component: LoginComponent},
{path:'dashboard', component: StatsComponent, canActivate : [AuthGuardService]},
{path: 'countries', loadChildren: () => import('./modules/countries/countries.module').then(m => m.CountriesModule),canActivate : [AuthGuardService] },
{path: 'edit', loadChildren: () => import('./modules/edit-country/edit-country.module').then(m => m.EditCountryModule) , canActivate : [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
