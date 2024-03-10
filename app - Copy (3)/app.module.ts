import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TheEndComponent } from './the-end/the-end.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UsernameComponent } from './username/username.component';
import { ServerComponent } from './server/server.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    EducationalBackgroundComponent,
    WorkExperienceComponent,
    TheEndComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    UsernameComponent,
    ServerComponent,
    DetailsComponent,
    DisplayComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
