import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  cities: any[] = [];
  viewWeather: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public weatherProvider: WeatherProvider,
    public storage: Storage) {
      // this.storage.get('favorites')
      //   .then((val) => {
      //   this.cities = val;
      //   console.log('Viewing city: ', val);
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
    this.storage.get('favorites')
      .then((val) => {
      this.cities = val;
      console.log('Viewing city: ', val);
    });
  }
    
  citySelected(city) {
    console.log(`selected: ${city.current_observation.display_location.full}`);
    // this.weatherProvider.getWeatherCoords(city.lat, city.lon)
    //   .subscribe(weather => {
    //     this.viewWeather = weather.current_observation;
    //     this.cities = [];
    //     console.log(this.viewWeather);
    //   },
    //   error => {
    //     console.log(error);
    //   });
    
    this.viewWeather = city;
  }

}
