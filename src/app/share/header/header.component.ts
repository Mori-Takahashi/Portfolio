import {Component, inject} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslationService} from "../../service/translation.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslationService) {}

  onCheckboxChange(event: Event): void{
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.translate.switchLanguage('en');
    } else {
      this.translate.switchLanguage('de');
    }
  }

}
