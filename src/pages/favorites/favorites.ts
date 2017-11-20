import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../providers/weather/weather';

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
    this.storage.get('favorites')
      .then((val) => {
      this.cities = val;
      console.log('Viewing city: ', val);
    }, err => {
      console.log(err);
    });
  }
    
  citySelected(city) {
    console.log(`selected: ${city.current_observation.display_location.full}`);
    this.viewWeather = city;
  }

}
