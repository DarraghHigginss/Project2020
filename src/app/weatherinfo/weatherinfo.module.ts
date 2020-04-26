import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherinfoPageRoutingModule } from './weatherinfo-routing.module';

import { WeatherinfoPage } from './weatherinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherinfoPageRoutingModule
  ],
  declarations: [WeatherinfoPage]
})
export class WeatherinfoPageModule {}
