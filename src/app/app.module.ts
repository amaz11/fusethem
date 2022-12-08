import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { NavComponent } from './nav/nav.component';
import { ProjectComponent } from './project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TeamcontentComponent } from './teamcontent/teamcontent.component';
import { BudgetcontentComponent } from './budgetcontent/budgetcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainbodyComponent,
    NavComponent,
    ProjectComponent,
    HomecontentComponent,
    TeamcontentComponent,
    BudgetcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
