import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './_components/about/about.component';
import { FooterComponent } from './_components/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
