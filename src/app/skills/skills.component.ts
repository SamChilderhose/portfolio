import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { skillsEn } from '../shared/i18n/skillsEn';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any=skillsEn

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english);
  }

  ngOnInit(): void {
  }

  clickSkill(skill: any) {
    const isOpen = skill.isDisplayed
    
    for (const categoryKey in this.skills) {
      if (this.skills.hasOwnProperty(categoryKey)) {
        const category = this.skills[categoryKey];
        for (const description of category) {
          description.isDisplayed = false;
        }
      }
    }

    skill.isDisplayed = ! isOpen;
  }
}

    
    
  
