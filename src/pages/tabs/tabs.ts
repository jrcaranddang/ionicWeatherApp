import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = FavoritesPage;

  constructor() {

  }
}
