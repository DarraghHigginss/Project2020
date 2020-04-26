//this was supposed to be the galway page but i had to change it to west as i could not get the source to work when using a button as i had it placed in the weather info folder


import { Component, OnInit } from '@angular/core';
import {RemoteService} from '../../Services/remote.service';

@Component({
  selector: 'app-galway',
  templateUrl: './galway.page.html',
  styleUrls: ['./galway.page.scss'],
})
export class GalwayPage implements OnInit {
weatherInformation:any=[];

  constructor(private remoteService:RemoteService) {


   }

  ngOnInit() { 
    this.remoteService.getLatestWeather().subscribe(
      (data)=>{
        this.weatherInformation = data.weather;
       }
    );
  }

}
