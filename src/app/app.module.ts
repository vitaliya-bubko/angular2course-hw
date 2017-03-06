import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResortComponent } from './resort/resort.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowersComponent } from './followers/followers.component';
import { FilterPipe } from './filter.pipe';
import { FilterCountryPipe } from './filter-country.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResortComponent,
    WeatherComponent,
    FollowersComponent,
    FilterPipe,
    FilterCountryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
