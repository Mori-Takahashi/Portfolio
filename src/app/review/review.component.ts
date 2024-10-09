import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {SliderCardComponent} from "./slider-card/slider-card.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    SliderCardComponent,
    TranslateModule
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

}
