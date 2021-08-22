import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
{path:'',pathMatch:'full',redirectTo: '/login'},
{path:'login',component: LoginComponent},
{path:'dashboard', component: StatsComponent},
{path: 'countries', loadChildren: () => import('./modules/countries/countries.module').then(m => m.CountriesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
