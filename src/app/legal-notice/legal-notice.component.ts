import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
