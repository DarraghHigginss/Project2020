import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//http import for use of api key
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(public http:HttpClient){ }//constructor invoking httpclient import

getLatestWeather() :Observable <any>{//method for retrieving the current weather conditions in galway
   return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=galway&appid=a6d25fb97a7574864fb25e40672bfa61');//My weather api key
}


}
