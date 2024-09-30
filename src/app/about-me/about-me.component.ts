import { Component, HostListener, NgZone } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  mouseX = 0;
  mouseY = 0;
  isMouseInWindow = true;
  private requestId: any;

  constructor(private ngZone: NgZone) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.isMouseInWindow = true;  // Maus ist im Fenster
    this.ngZone.runOutsideAngular(() => {
      if (this.requestId) {
        cancelAnimationFrame(this.requestId);
      }
      this.requestId = requestAnimationFrame(() => {
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
      });
    });
  }

  @HostListener('window:mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    // Prüfe, ob die Maus das Fenster verlassen hat
    if (!event.relatedTarget || (event.relatedTarget as Node).nodeName === 'HTML') {
      this.isMouseInWindow = false;  // Maus ist außerhalb des Fensters
    }
  }

  @HostListener('window:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.isMouseInWindow = true;  // Maus ist wieder im Fenster
  }
}
