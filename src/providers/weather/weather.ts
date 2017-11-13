import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  desktop: Boolean = false;

  constructor(
    public http: HttpClient,
    public plt: Platform) {
    // public http: HttpClientModule) {
    console.log('Hello WeatherProvider Provider');
    if (this.plt.is('core')) {
      // This will only print when on desktop
      this.desktop = true;
      console.log('I am a desktop device!');
    }
  }

  getWeather(city, state){
    let url = '/api/'+this.apiKey+'/conditions/q/';
    return this.desktop ? this.http.get(url+state+'/'+city+'.json') : this.http.get('https://api.wunderground.com/api/'+this.apiKey+'/conditions/q'+state+'/'+city+'.json');
  }

  getWeatherCoords(lat, lon) {
    let url = '/api/'+this.apiKey+'/conditions/q/';
    return this.desktop ? this.http.get(url+'/'+lat+','+lon+'.json') : this.http.get('https://api.wunderground.com/api/'+this.apiKey+'/conditions/q'+'/'+lat+','+lon+'.json');
  }

  search(query: string) {
    let searchUrl = "/search/aq?query=";
    return this.desktop ? this.http.get(searchUrl+query) : this.http.get('http://autocomplete.wunderground.com/aq?query='+query);
  }
  
  geoLookupCoords(lat, lon) {
    // http://api.wunderground.com/api/c56568eedbc03ac8/conditions/q/37.776289,-122.395234.json
    let geoUrl = /api/+this.apiKey+'/geolookup/q/';
    return this.desktop ? this.http.get(geoUrl+lat+','+lon+'.json') : this.http.get('http://api.wunderground.com/api/'+this.apiKey+'/geolookup/q/'+lat+','+lon+'.json');
  }
}
