import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalwayPageRoutingModule } from './galway-routing.module';

import { GalwayPage } from './galway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalwayPageRoutingModule
  ],
  declarations: [GalwayPage]
})
export class GalwayPageModule {}
