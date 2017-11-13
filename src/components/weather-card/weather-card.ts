import { Component, Input } from '@angular/core';

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

  constructor() {
    console.log('Hello WeatherCardComponent Component');
  }

}
