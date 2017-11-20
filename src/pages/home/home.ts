import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  lat: any;
  lon: any;

  constructor(
    public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    private geolocation: Geolocation) {

    // get coordinates
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords);
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        
        // get location weather by coordinates
        if(this.lat && this.lon) {
          this.weather = this.weatherProvider.getWeatherCoords(this.lat, this.lon)
          // this.weatherProvider.getWeatherCoords(this.lat, this.lon)
          //   .subscribe(weather => {
          //     console.log(weather);
          //     this.weather = weather;
          //   });
        }
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  ionViewWillEnter(){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
