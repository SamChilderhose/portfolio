import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterestsComponent } from './interests/interests.component';
import { FadeInComponent } from './fade-in/fade-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CurriculumVitaeComponent,
    ProjectsComponent,
    ContactComponent,
    InterestsComponent,
    FadeInComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TranslateModule, 
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule.forRoot(),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
