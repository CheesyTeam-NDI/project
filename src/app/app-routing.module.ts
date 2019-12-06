import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './_components/general/header/header.component';
import {HomepageComponent} from './_components/homepage/homepage.component';
import {AboutComponent} from './_components/about/about.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
