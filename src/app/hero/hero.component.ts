import {Component, HostListener, OnInit } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  ngOnInit() {
    this.updateEmailInnerHtml();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateEmailInnerHtml();
  }

  updateEmailInnerHtml() {
    const emailHTML = document.getElementById('mail');
    if (emailHTML) {
      if (window.innerWidth <= 600) {
        emailHTML.innerHTML = '<img src="icons/mail.svg" alt="mail">';
      } else {
        emailHTML.innerHTML = 'info@lyonelberzen.dev';
      }
    }
  }

}
