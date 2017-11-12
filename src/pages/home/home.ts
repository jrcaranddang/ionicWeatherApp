import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
// import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:any;
  lat: any;
  long: any;

  constructor(
    public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    // private storage:Storage,
    private geolocation: Geolocation) {

    // get coordinates
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        console.log(resp.coords);
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        
        
        // get location by coordinates
        if(this.lat && this.lon) {
          this.weatherProvider.getWeatherCoords(this.lat, this.lon)
          // this.weatherProvider.geoLookupCoords(this.lat, this.lon)
            .subscribe(weather => {
              console.log(weather);
              // this.location = weather.location;
              this.weather = weather.current_observation;
            });
        }
        
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
    
    let watch = this.geolocation.watchPosition();
    
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
    });
  }

  ionViewWillEnter(){
    
    // this.storage.get('location').then((val) => {
    //   if(val != null){
    //     this.location = JSON.parse(val);
    //   } else {
    //     this.location = {
    //       city: 'Miami',
    //       state: 'FL'
    //     }
    //   }

        
    // if(this.location) {
      // this.weatherProvider.getWeather(this.location.city, this.location.state)  
      //   .subscribe(weather => {
      //     this.weather = weather.current_observation;
      //     console.log(weather.current_observation);
      //   });
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
