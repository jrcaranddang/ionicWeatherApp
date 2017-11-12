import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  cities: any[] = [
    "San Diego",
    "San Francisco",
    "Las Vegas",
    "Honolulu"
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    // this.storage.get('favorites')
    //   .then((val) => {
    //   this.cities = val;
    //   console.log('Viewing city: ', val);
    // });
  }

  ionViewWillEnter(){
    this.storage.get('favorites')
      .then((val) => {
      this.cities = val;
      console.log('Viewing city: ', val);
    });
  }
    
  citySelected(city) {
    console.log(`selected: ${city}`);
  }

}
