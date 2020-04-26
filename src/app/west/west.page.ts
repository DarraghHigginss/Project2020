import { Component, OnInit } from '@angular/core';
import {RemoteService} from '../Services/remote.service';

@Component({
  selector: 'app-west',
  templateUrl: './west.page.html',
  styleUrls: ['./west.page.scss'],
})
export class WestPage implements OnInit {
  weatherInformation:any=[];
  weatherInformationmain:any[];

  constructor(private remoteService:RemoteService) {


   }

  ngOnInit() {
    this.remoteService.getLatestWeather().subscribe(//used to obtain the information needed for weather
      (data)=>{
        this.weatherInformation = data.weather;
       }
    );
    
    this.remoteService.getLatestWeather().subscribe(
      (data)=>{
        this.weatherInformationmain = data.main;
       }
    );
  
  }

  

}


