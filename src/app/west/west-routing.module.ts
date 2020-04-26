import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WestPage } from './west.page';

const routes: Routes = [
  {
    path: '',
    component: WestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestPageRoutingModule {}
