import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews = [
    {
      text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H. Janisch',
    },
    {
      text: 'I had the good fortune of working with Lukas on a project at the Developer Akademie. His effort and calm demeanor always kept our team on track.',
      author: 'T. Schulz',
    }
  ];

  constructor() { }
}
