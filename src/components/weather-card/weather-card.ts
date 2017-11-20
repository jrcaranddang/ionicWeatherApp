import { Component, Input } from '@angular/core';
import { WeatherProvider } from '../../providers/weather/weather';

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

  constructor(
    public weatherProvider: WeatherProvider) {
    console.log('Hello WeatherCardComponent Component');
  }

  favorite(city) {
    this.weatherProvider.favorite(city)
    console.log("Saved to favorites");
  }
  
}
