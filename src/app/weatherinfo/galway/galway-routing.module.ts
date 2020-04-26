import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalwayPage } from './galway.page';

const routes: Routes = [
  {
    path: '',
    component: GalwayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalwayPageRoutingModule {}
