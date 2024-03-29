import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { WatchFilmComponent } from './watch-film/watch-film.component';
import { AllFilmsComponent } from './all-films/all-films.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'watch-film', component: WatchFilmComponent },
  { path: 'films', component: AllFilmsComponent },
];
