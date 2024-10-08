import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: '**', component: PageNotFoundComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'home', component: HomeComponent}
];
