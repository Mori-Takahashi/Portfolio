import { Component } from '@angular/core';
import {ContactComponent} from "./contact/contact.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ContactComponent,
    TranslateModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
