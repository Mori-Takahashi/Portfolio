import { Component } from '@angular/core';
import {ReviewService} from "../../service/review.service";
import {NgClass} from "@angular/common";
import {TranslateStatusService} from "../../service/translate-status.service";

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

  constructor(public reviewService: ReviewService, private translateStatus: TranslateStatusService) {}

  get reviews() {
    return this.translateStatus.translateStatus
      ? this.reviewService.reviews
      : this.reviewService.reviewsDE;
  }


  currentIndex: number = 1;
  leftCard: number = 0;
  rightCard: number = 0;


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
      this.currentIndex = this.reviews.length - 1;
    }
    this.leftCardIndex();
    this.rightCardIndex();
  }

  leftCardIndex() {
    if (this.currentIndex > 0) {
      this.leftCard = this.currentIndex - 1;
    } else {
      this.leftCard = this.reviews.length - 1;
    }
  }

  rightCardIndex() {
    if (this.currentIndex < this.reviews.length - 1) {
      this.rightCard = this.currentIndex + 1;
    } else {
      this.rightCard = 0;
    }
  }

}
