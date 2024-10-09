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


  translateStatus: boolean = false;

  onCheckboxChange(event: Event): void{
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.translate.switchLanguage('en');
      this.translateStatus = true;
    } else {
      this.translate.switchLanguage('de');
      this.translateStatus = false;
    }
  }

}
