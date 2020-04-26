import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherinfoPage } from './weatherinfo.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherinfoPage
  },
  {
    path: 'galway',
    loadChildren: () => import('./galway/galway.module').then( m => m.GalwayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherinfoPageRoutingModule {}
