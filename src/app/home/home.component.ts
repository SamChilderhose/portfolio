import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  mobile = false;

  @ViewChild('typedElement') typedElement!: ElementRef;

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english);
  }

  ngOnInit(): void {
    if (window.screen.width <= 1000) { // 768px portrait
      this.mobile = true;
    }
  }

  ngAfterViewInit(): void {
    const options = {
      strings: [],
      typeSpeed: 50,
      backSpeed: 100,
      loop: false,
      showCursor: false
    };

    if (this.typedElement) {
      const typed = new Typed(this.typedElement.nativeElement, options);
      typed.reset(true);
    } else {
      console.error('Typed element not found');
    }
  }
}
