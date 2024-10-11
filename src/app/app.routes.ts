import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SuccessComponent} from "./success/success.component";
import {LegalNoticeComponent} from "./legal-notice/legal-notice.component";

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'legalNotice', component: LegalNoticeComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];
