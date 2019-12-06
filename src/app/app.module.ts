import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RessourcesDetailsComponent } from './_components/ressources/ressources-details/ressources-details.component';
import { RessourcesListComponent } from './_components/ressources/ressources-list/ressources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RessourcesDetailsComponent,
    RessourcesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
