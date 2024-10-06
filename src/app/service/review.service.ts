import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews = [
    {
      text: 'Working with Lyonel was always professional, focused and respectful. Lyonel enhanced our Projects with innovative and creative solutions.' +
        'Notably, his humor consistently create a motivating work atmosphere. Lyonel was a valuable asset to our team, and we look forward to more' +
        'projects together.',
      author: 'Philipp Buckstegen',
      authorImg: 'colleagues_img/philipp.jpg'
    },
    {
      text: 'Working with Lyonel Berzen was consistently rewarding and enjoyable. Lyonel’s youthful dynamism and talent add substantial value to any' +
        'project he is involved in. He brings a friendly and encouraging atmosphere to the team, allowing us to excel and deliver our best work. Lyonel' +
        'remains calm and focused under pressure, always willing to learn new skills and tackle challenges with motivation and discipline. His sympathetic' +
        'nature and genuine interest in innovation make him a pleasure to work with. With his structured approach and reliability, Lyonel significantly' +
        'contributed to the success of our projects. He is a team player with a strong design-oriented mindset, ensuring that all tasks are managed' +
        'efficiently and deadlines are met with high-quality results. Lyonel Berzen is undoubtedly an asset to any team, and he has a bright future ahead' +
        'of him.',
      author: 'Tayfun Aya',
      authorImg: 'colleagues_img/ty.png'
    }
  ];

  constructor() { }
}
