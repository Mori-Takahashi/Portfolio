import {Component, HostListener, OnInit} from '@angular/core';
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
export class HeroComponent implements OnInit{

  ngOnInit() {
    this.updateEmailInnerHtml();
    this.showButtons();
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

showButtons() {
  const buttons = document.getElementById('button1');
  const buttons2 = document.getElementById('button2');
  setTimeout(() => {
    if (buttons && buttons2) {
      buttons.classList.add('a-link-button');
      buttons2.classList.add('a-link-button');
      buttons.classList.add('scale-in-hor-center');
      buttons2.classList.add('scale-in-hor-center');
      buttons.classList.remove('hidden');
      buttons2.classList.remove('hidden');
    }
  },);
}
/*TODO muss zuende gebaut werden*/

/*a-link-button*/
}
