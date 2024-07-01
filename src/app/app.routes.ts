import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BrowserComponent } from './components/browser/browser.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'browser', component: BrowserComponent},
    {path: 'locations', component: LocationsComponent},
    {path: 'episodes', component: EpisodiosComponent}
];
