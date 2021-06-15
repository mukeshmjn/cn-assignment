import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerModule } from "ngx-spinner";
import { UpcomingComponent } from './components/all-events/upcoming/upcoming.component';
import { ArchivedComponent } from './components/all-events/archived/archived.component';
import { AlltimeFavComponent } from './components/all-events/alltime-fav/alltime-fav.component';
import { WebiAlltimeFavComponent } from './components/webinars/webi-alltime-fav/webi-alltime-fav.component';
import { WebiArchivedComponent } from './components/webinars/webi-archived/webi-archived.component';
import { WebiUpcomingComponent } from './components/webinars/webi-upcoming/webi-upcoming.component';
import { CeUpcomingComponent } from './components/coding-events/ce-upcoming/ce-upcoming.component';
import { CeAlltimeFavComponent } from './components/coding-events/ce-alltime-fav/ce-alltime-fav.component';
import { CeArchivedComponent } from './components/coding-events/ce-archived/ce-archived.component';
import { BootcampUpcomingComponent } from './components/bootcamps/bootcamp-upcoming/bootcamp-upcoming.component';
import { BootcampArchivedComponent } from './components/bootcamps/bootcamp-archived/bootcamp-archived.component';
import { BootcampAlltimeFavComponent } from './components/bootcamps/bootcamp-alltime-fav/bootcamp-alltime-fav.component';
import { WorkshopArchivedComponent } from './components/workshops/workshop-archived/workshop-archived.component';
import { WorkshopAlltimeFavComponent } from './components/workshops/workshop-alltime-fav/workshop-alltime-fav.component';
import { WorkshopUpcomingComponent } from './components/workshops/workshop-upcoming/workshop-upcoming.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    CeUpcomingComponent,
    CeAlltimeFavComponent,
    CeArchivedComponent,
    BootcampUpcomingComponent,
    BootcampArchivedComponent,
    BootcampAlltimeFavComponent,
    WorkshopArchivedComponent,
    WorkshopAlltimeFavComponent,
    WorkshopUpcomingComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    NgxSpinnerModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
