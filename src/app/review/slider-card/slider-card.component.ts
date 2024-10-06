import { Component } from '@angular/core';
import {ReviewService} from "../../service/review.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './slider-card.component.html',
  styleUrl: './slider-card.component.scss',
})
export class SliderCardComponent {

  currentIndex: number = 0;
  leftCard: number = 0;
  rightCard: number = 1;

  constructor(public reviewService: ReviewService) {}

  nextReview() {
    if (this.currentIndex < this.reviewService.reviews.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.leftCardIndex();
    this.rightCardIndex();
  }

  prevReview() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviewService.reviews.length - 1;
    }
    this.leftCardIndex();
    this.rightCardIndex();
  }

  leftCardIndex() {
    if (this.currentIndex > 0) {
      this.leftCard = this.currentIndex - 1;
    } else {
      this.leftCard = this.reviewService.reviews.length - 1;
    }
  }

  rightCardIndex() {
    if (this.currentIndex < this.reviewService.reviews.length - 1) {
      this.rightCard = this.currentIndex + 1;
    } else {
      this.rightCard = 0;
    }
  }

}
