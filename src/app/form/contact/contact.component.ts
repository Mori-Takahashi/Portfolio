import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import {NgxTurnstileModule} from "ngx-turnstile";
import {XssProtectService} from "../../service/form/xss-protect.service";
import {NgClass, NgIf} from "@angular/common";
import {MailAPIService} from "../../service/form/mail-api.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    NgxTurnstileModule,
    NgIf,
    NgClass
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isLoading = false;
  hasError = false;

  constructor(private fb: FormBuilder, public xssValidate: XssProtectService, private mailAPI: MailAPIService) {}


  updateTurnstileResponse(response: string | null) {
    this.contactForm.patchValue({ 'cf-turnstile-response': response });
  }

  sendCaptchaResponse(response: string | null) {
    this.updateTurnstileResponse(response);
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, this.xssValidate.validate(), this.xssValidate.noHTML()]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, this.xssValidate.validate(), this.xssValidate.noHTML()]],
      privacyPolicy: [false, Validators.requiredTrue],
      'cf-turnstile-response': ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      this.sendMail(this.contactForm.value);
      this.isLoading = true;
      this.hasError = false;
    } else {
      console.log('Form is invalid');
      this.alertUser();
    }
  }

  sendMail(formData: any) {
    fetch(this.mailAPI.mailAPI, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.isLoading = false;
      window.location.href = "success";
    }).catch((error) => {
      this.isLoading = false;
      this.hasError = true;
      console.log(error);
    });
  }

  alertUser() {
    let form = this.contactForm.value;
    let turnstileResponse = document.getElementById('cf-turnstile-response');
    let nameLabel = document.getElementById('nameLabel');
    let emailLabel = document.getElementById('emailLabel');
    let messageLabel = document.getElementById('messageLabel');
    let privacyPolicyLabel = document.getElementById('checkBoxSpan');

    nameLabel?.classList.remove('flash');
    emailLabel?.classList.remove('flash');
    messageLabel?.classList.remove('flash');
    privacyPolicyLabel?.classList.remove('flash');

    let hasError = false;

    if (form.name === '' && nameLabel) {
      nameLabel.classList.add('flash');
      hasError = true;
    }
    if (form.email === '' && emailLabel) {
      emailLabel.classList.add('flash');
      hasError = true;
    }
    if (form.message === '' && messageLabel) {
      messageLabel.classList.add('flash');
      hasError = true;
    }
    if (form.privacyPolicy === false && privacyPolicyLabel) {
      privacyPolicyLabel.classList.add('flash');
      hasError = true;
    }
  }


}
