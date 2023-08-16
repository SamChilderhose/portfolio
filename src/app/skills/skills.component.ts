import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"JavaScript/Typescript", percent:90,remark:'excellent'},{name:"Angular, React, BootStrap", percent:90,remark:'excellent'},{name:"SQL", percent:90,remark:'excellent'}, {name:"Python, R", percent:90,remark:'excellent'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Excel",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:50,remark:'average'}, {name:"Postman",percent:90,remark:'excellent'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"DevOps",percent:50,remark:'average'},{name:"CI/CD",percent:90,remark:'excellent'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
