import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel.service';
import { HeaderComponent } from './components/header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PlaceService } from './services/place.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // or NoopAnimationsModule for testing


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    NavBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [HotelService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
