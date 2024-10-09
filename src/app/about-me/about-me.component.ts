import { Component, HostListener, NgZone } from '@angular/core';
import {NgStyle} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgStyle,
    TranslateModule
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

  /**
   * Handles the mousemove event on the document.
   * Updates the mouseX and mouseY properties with the current mouse position.
   * Ensures the update runs outside Angular's zone to avoid triggering change detection.
   *
   * @param event - The MouseEvent object.
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.isMouseInWindow = true;
    this.ngZone.runOutsideAngular(() => {
      if (this.requestId) {
        cancelAnimationFrame(this.requestId);
      }
      this.requestId = requestAnimationFrame(() => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      });
    });
  }

  /**
   * Handles the mouseout event on the window.
   * Sets the isMouseInWindow property to false if the mouse leaves the window.
   *
   * @param event - The MouseEvent object.
   */
  @HostListener('window:mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    if (
      !event.relatedTarget ||
      (event.relatedTarget as Node).nodeName === 'HTML'
    ) {
      this.isMouseInWindow = false;
    }
  }

  /**
   * Handles the mouseover event on the window.
   * Sets the isMouseInWindow property to true when the mouse enters the window.
   *
   * @param event - The MouseEvent object.
   */
  @HostListener('window:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.isMouseInWindow = true;
  }
}
