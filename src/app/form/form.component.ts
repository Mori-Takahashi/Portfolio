import { Component } from '@angular/core';
import {ContactComponent} from "./contact/contact.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ContactComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
