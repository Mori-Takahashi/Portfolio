import { Component } from '@angular/core';
import {HeroComponent} from "../hero/hero.component";
import {AboutMeComponent} from "../about-me/about-me.component";
import {SkillSetComponent} from "../skill-set/skill-set.component";
import {ProjecsComponent} from "../projecs/projecs.component";
import {ReviewComponent} from "../review/review.component";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjecsComponent,
    ReviewComponent,
    FormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
