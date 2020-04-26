import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WestPageRoutingModule } from './west-routing.module';

import { WestPage } from './west.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WestPageRoutingModule
  ],
  declarations: [WestPage]
})
export class WestPageModule {}
