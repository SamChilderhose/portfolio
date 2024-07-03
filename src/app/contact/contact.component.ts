import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  subject: string = '';
  message: string = '';
  mobile = false;

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english);
  
  }

  ngOnInit(): void {
    if (window.screen.width <= 1000) { // 768px portrait
      this.mobile = true;
    }
  }

  composeEmail() {
    console.log("Logging message:")
    console.log(this.message)
    const recipient = 'samchilderhose@gmail.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
    
    window.location.href = mailtoLink;
  }
}
