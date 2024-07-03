import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { projectsEn } from '../shared/i18n/projectsEn';


import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[]=projectsEn;
  
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.projects=projectsEn;
      }
      else{
        //pass
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log("after view init");
    this.onMouse("portfolio-link", "portfolio-img");
    this.onMouse("teamTraveler-link", "teamTraveler-img");
    this.onMouse("mautic-link", "mautic-img");
    this.onMouse("pokedex-link", "pokedex-img");
    this.onMouse("riddle-link", "riddle-img");
  }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink).on("mouseenter", function () {
      console.log('on mouseenter');
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );

    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );
  }
}
