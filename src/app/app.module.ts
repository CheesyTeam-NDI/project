import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RessourcesDetailsComponent } from './_components/ressources/ressources-details/ressources-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RessourcesDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
