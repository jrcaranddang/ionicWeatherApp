import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

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
  items: any[];

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
        this.items = cities;
        console.log(this.items);
      }, error => {
        console.log(error);
      });
  }

  selectWeather() {
    console.log("show me the weather!");
  }
}
