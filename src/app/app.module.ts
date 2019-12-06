import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {AboutComponent} from './_components/about/about.component';
import {FooterComponent} from './_components/general/footer/footer.component';
import {HeaderComponent} from './_components/general/header/header.component';
import {NavbarComponent} from './_components/general/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HomepageComponent} from './_components/homepage/homepage.component';
import {LoginComponent} from './_components/login/login.component';
import {RessourcesDetailsComponent} from './_components/ressources/ressources-details/ressources-details.component';
import {RessourcesListComponent} from './_components/ressources/ressources-list/ressources-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { TruncateModule } from 'ng2-truncate';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import {SimulationComponent} from './_components/simulation/simulation.component';
import { ResultatSimulationComponent } from './_components/resultat-simulation/resultat-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RessourcesDetailsComponent,
    RessourcesListComponent,
    NotFoundComponent,
    SimulationComponent,
    ResultatSimulationComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    TruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
