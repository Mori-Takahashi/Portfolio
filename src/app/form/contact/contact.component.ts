import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import {NgxTurnstileModule} from "ngx-turnstile";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    NgxTurnstileModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  updateTurnstileResponse(response: string | null) {
    this.contactForm.patchValue({ 'cf-turnstile-response': response });
  }

  sendCaptchaResponse(response: string | null) {
    this.updateTurnstileResponse(response);
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
      'cf-turnstile-response': ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sendMail(this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  sendMail(formData: any) {
    fetch("https://formspree.io/f/mrbgzdaa", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      window.location.href = "/contact/success";
    }).catch((error) => {
      console.log(error);
    });
  }


}
