import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor(
    public http: HttpClient) {
    // public http: HttpClientModule) {
    console.log('Hello WeatherProvider Provider');
    this.url = '/api/'+this.apiKey+'/conditions/q';
    // this.url = 'https://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    let url = '/api/'+this.apiKey+'/conditions/q/';
    return this.http.get(url+state+'/'+city+'.json');
      // .map(res => res.json());
  }

  getWeatherCoords(lat, lon) {
    let url = '/api/'+this.apiKey+'/conditions/q/';
    return this.http.get(url+'/'+lat+','+lon+'.json');
  }

  search(query: string) {
    let searchUrl = "/search/aq?query=";
    return this.http.get(searchUrl+query);
      // .map(res => res.json());
  }
  
  geoLookupCoords(lat, lon) {
    // http://api.wunderground.com/api/c56568eedbc03ac8/conditions/q/37.776289,-122.395234.json
    let geoUrl = /api/+this.apiKey+'/geolookup/q/';
    return this.http.get(geoUrl+lat+','+lon+'.json');
  }
}
