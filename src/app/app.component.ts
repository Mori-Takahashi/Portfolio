import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {HeaderComponent} from "./share/header/header.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SkillSetComponent} from "./skill-set/skill-set.component";
import {ProjecsComponent} from "./projecs/projecs.component";
import {ReviewComponent} from "./review/review.component";
import {FormComponent} from "./form/form.component";
import {FooterComponent} from "./share/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjecsComponent,
    ReviewComponent,
    FormComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
