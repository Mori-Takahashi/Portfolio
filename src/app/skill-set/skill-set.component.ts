import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

/**
 * Toggles the 'active' class on the element with the ID 'growBubble'.
 * If the element is found, it will add the 'active' class if it is not present,
 * or remove it if it is present.
 */
toggleBubble() {
  let growBubble = document.getElementById('growBubble');
  if (growBubble) {
    growBubble.classList.toggle('active');
  }
}


}

