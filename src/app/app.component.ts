import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {HeaderComponent} from "./share/header/header.component";
import {AboutMeComponent} from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
