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
    technologies:[{name:"JavaScript/Typescript", remark:'excellent', description: "2 years experience in work environment"},{name:"Angular, React, BootStrap",remark:'excellent'},{name:"SQL",remark:'excellent'}, {name:"Python, R",remark:'excellent'}, {name:"MongoDB",remark:'excellent'}],
    tools:[{name:"Git",remark:'excellent'},{name:"Excel",remark:'excellent'},{name:"Linux, Windows",remark:'excellent'},{name:"MySql, PgSql",remark:'excellent'},{name:"Docker, Kubernetes",remark:'excellent'}, {name:"Postman",remark:'excellent'} , {name:"Notion",remark:'excellent'}],
    methodologies:[{name:"Scrum",remark:'excellent'},{name:"DevOps",remark:'excellent'},{name:"CI/CD",remark:'excellent'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
