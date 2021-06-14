import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';

import { NgxSpinnerModule } from "ngx-spinner";
import { UpcomingComponent } from './components/all-events/upcoming/upcoming.component';
import { ArchivedComponent } from './components/all-events/archived/archived.component';
import { AlltimeFavComponent } from './components/all-events/alltime-fav/alltime-fav.component';
import { WebiAlltimeFavComponent } from './components/webinars/webi-alltime-fav/webi-alltime-fav.component';
import { WebiArchivedComponent } from './components/webinars/webi-archived/webi-archived.component';
import { WebiUpcomingComponent } from './components/webinars/webi-upcoming/webi-upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsPageComponent,
    UpcomingComponent,
    ArchivedComponent,
    AlltimeFavComponent,
    WebiAlltimeFavComponent,
    WebiArchivedComponent,
    WebiUpcomingComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
