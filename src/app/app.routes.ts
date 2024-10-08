import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

/*import * as path from "node:path";*/
/* hier muss noch importiert werden */

export const routes: Routes = [
  {path: '**', component: PageNotFoundComponent},
  {path: '404', component: PageNotFoundComponent}
];


/*  { path: '', component: deutschComponent },*/
