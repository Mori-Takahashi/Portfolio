import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

  countdown: number = 1000;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.countdown--;
      if (this.countdown == 0) {
        clearInterval(interval);
        this.router.navigate(['']);
      }
    }, 1000);
  }

}
