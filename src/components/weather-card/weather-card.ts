import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WeatherCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weather-card',
  templateUrl: 'weather-card.html'
})
export class WeatherCardComponent {
  @Input() weather: any;
  favorites: any[] = [];

  constructor(
    private storage: Storage) {
    console.log('Hello WeatherCardComponent Component');
  }

  favorite(city) {
    console.log("Saved to favorites");
    this.favorites.push(city);
    this.storage.set("favorites", this.favorites);
    console.log(this.favorites);
  }
  
}
