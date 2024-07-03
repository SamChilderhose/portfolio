import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { experiencesEn} from '../shared/i18n/experiencesEn';
import { educationEn } from '../shared/i18n/educationEn';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']

})
export class CurriculumVitaeComponent implements OnInit {
  experiences:any=experiencesEn;
  educationDescription:any=educationEn;

  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.experiences=experiencesEn;
        this.educationDescription=educationEn;
      }
      else{
        // pass
      }
    });
  }

  ngOnInit(): void {
    
  }
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }

  educationOnClick() {
    this.educationDescription.isDisplayed = !this.educationDescription.isDisplayed
  }

}
