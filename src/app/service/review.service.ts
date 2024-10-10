import { Injectable } from '@angular/core';
import {TranslateStatusService} from "./translate-status.service";

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

  reviewsDE = [
    {
      text: 'Die Zusammenarbeit mit Lyonel war stets professionell, zielgerichtet und respektvoll. Lyonel hat unsere Projekte mit innovativen und kreativen Lösungen bereichert. Vor allem sein Humor sorgte stets für eine motivierende Arbeitsatmosphäre. Lyonel war eine wertvolle Bereicherung für unser Team, und wir freuen uns auf weitere gemeinsame Projekte.',
      author: 'Philipp Buckstegen',
      authorImg: 'colleagues_img/philipp.jpg'
    },
    {
      text: 'Die Zusammenarbeit mit Lyonel Berzen war stets lohnend und angenehm. Lyonels jugendliche Dynamik und sein Talent sind ein großer Gewinn für jedes Projekt, an dem er beteiligt ist. Er bringt eine freundliche und ermutigende Atmosphäre in das Team, die es uns ermöglicht, uns zu übertreffen und unsere beste Arbeit zu leisten. Lyonel bleibt auch unter Druck ruhig und konzentriert und ist stets bereit, neue Fähigkeiten zu erlernen und Herausforderungen mit Motivation und Disziplin anzugehen. Seine sympathische Art und sein echtes Interesse an Innovationen machen die Zusammenarbeit mit ihm zu einem Vergnügen. Mit seinem strukturierten Vorgehen und seiner Zuverlässigkeit hat Lyonel wesentlich zum Erfolg unserer Projekte beigetragen. Er ist ein Teamplayer mit einer ausgeprägten gestalterischen Denkweise, der dafür sorgt, dass alle Aufgaben effizient bewältigt und Termine mit qualitativ hochwertigen Ergebnissen eingehalten werden. Lyonel Berzen ist zweifelsohne eine Bereicherung für jedes Team und hat eine große Zukunft vor sich.',
      author: 'Tayfun Aya',
      authorImg: 'colleagues_img/ty.png'
    }
  ];

  constructor() { }
}
