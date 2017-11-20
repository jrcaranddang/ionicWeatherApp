import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';


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
  cities: any;
  favorites: any[] = [];
  viewWeather: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private weatherProvider: WeatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchWeather(e) {
    let val = e.target.value;
    
    console.log(val);

    // with async pipe
    // this.cities = this.weatherProvider.search(val).map(cities => {
    //     return cities.RESULTS
    //   });
      
    this.weatherProvider.search(val)
      .subscribe(cities => {
        this.cities = cities['RESULTS'];
        console.log(cities['RESULTS']);
      }, error => {
        console.log(error);
      });
  }
  
  selectWeather(city) {
    console.log("show me the weather!");
    
    this.viewWeather = this.weatherProvider.getWeatherCoords(city.lat, city.lon)
    // this.weatherProvider.getWeatherCoords(city.lat, city.lon)
    //   .subscribe(weather => {
    //     this.viewWeather = weather;
    //     // this.viewWeather = weather.current_observation;
        this.cities = [];
    //     console.log(this.viewWeather);
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }
  
}
