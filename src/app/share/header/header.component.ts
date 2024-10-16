import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {TranslationService} from "../../service/translation.service";
import {TranslateStatusService} from "../../service/translate-status.service";
import {RouterLink} from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";

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

  constructor(private translate: TranslationService, public translateStatus: TranslateStatusService, private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToElement(fragment);
        }
      }
    });
  }

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

  scrollToElement(elementId: string) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);  // Small delay to ensure the page is rendered before scrolling
  }

}
