import { Component } from '@angular/core';
import {ReviewService} from "../../service/review.service";

@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [],
  templateUrl: './slider-card.component.html',
  styleUrl: './slider-card.component.scss'
})
export class SliderCardComponent {
  constructor(public reviewService: ReviewService) {
  }
}
