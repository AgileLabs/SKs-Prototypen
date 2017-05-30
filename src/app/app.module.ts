import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonFilterService } from './lessons/lesson-filter.service';
import { LoginComponent } from './login/login.component';
import { WortschatzComponent } from './wortschatz/wortschatz.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LoginComponent,
    WortschatzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [LessonFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
