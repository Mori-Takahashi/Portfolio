import {Component, inject} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslationService} from "../../service/translation.service";
import {TranslateStatusService} from "../../service/translate-status.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslationService, public translateStatus: TranslateStatusService) {}



  onCheckboxChange(event: Event): void{
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.translate.switchLanguage('en');
      this.translateStatus.translateStatus = true;
    } else {
      this.translate.switchLanguage('de');
      this.translateStatus.translateStatus = false;
    }
  }

}
