import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './_components/homepage/homepage.component';
import {AboutComponent} from './_components/about/about.component';
import {RessourcesDetailsComponent} from './_components/ressources/ressources-details/ressources-details.component';
import {RessourcesListComponent} from './_components/ressources/ressources-list/ressources-list.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'ressources', component: RessourcesListComponent},
  {path: 'ressources/:id', component: RessourcesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
