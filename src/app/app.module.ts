import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SimulationComponent} from './_components/simulation/simulation.component';
import { ResultatSimulationComponent } from './_components/resultat-simulation/resultat-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    ResultatSimulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
