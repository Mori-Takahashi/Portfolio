import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

/*import {AboutMeComponent} from "./about-me/about-me.component";
import {FormComponent} from "./form/form.component";
import {HeroComponent} from "./hero/hero.component";
import {ProjecsComponent} from "./projecs/projecs.component";
import {ReviewComponent} from "./review/review.component";
import {SkillSetComponent} from "./skill-set/skill-set.component";*/

/*import * as path from "node:path";*/
/* hier muss noch importiert werden */

export const routes: Routes = [
  {path: '**', component: PageNotFoundComponent},
  {path: '404', component: PageNotFoundComponent}
];


/*  { path: '', component: deutschComponent },*/

/*

  {path: '', component: HeroComponent},
  {path: '', component: AboutMeComponent},
  {path: '', component: ProjecsComponent},
  {path: '', component: SkillSetComponent},
  {path: '', component: ReviewComponent},
  {path: '', component: FormComponent},

*/
