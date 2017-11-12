import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  cities: Observable<any>;
  favorites: any[] = [];
  viewWeather: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private weatherProvider:WeatherProvider,
    private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchWeather(e) {
    let val = e.target.value;
    
    console.log(val);

    this.weatherProvider.search(val)
      .subscribe(cities => {
        this.cities = cities['RESULTS'];
        console.log(cities['RESULTS']);
      }, error => {
        console.log(error);
      });
  }

  favorite(city) {
    console.log("favorite");
    this.favorites.push(city.display_location.full);
    this.storage.set("favorites", this.favorites);
    console.log(this.favorites);
  }
  
  selectWeather(city) {
    console.log("show me the weather!");
    
    this.weatherProvider.getWeatherCoords(city.lat, city.lon)
      .subscribe(weather => {
        this.viewWeather = weather.current_observation;
        this.cities = [];
        console.log(this.viewWeather);
      });
    // this.viewWeather = city;
  }
  
}
