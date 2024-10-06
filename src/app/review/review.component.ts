import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {SliderCardComponent} from "./slider-card/slider-card.component";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    SliderCardComponent
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

}
