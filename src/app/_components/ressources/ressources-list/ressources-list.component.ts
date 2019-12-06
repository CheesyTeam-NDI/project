export class AppRoutingModule {
}
import { Component, OnInit } from '@angular/core';
import { Reponses } from 'src/app/_models/reponses';

@Component({
  selector: 'app-ressources-list',
  templateUrl: './ressources-list.component.html',
  styleUrls: ['./ressources-list.component.scss']
})
export class RessourcesListComponent implements OnInit {

  constructor() { }

  reponses: Reponses[] = [new Reponses('A', 'Test', 1, 'test', 'LongitudeLatitude', 'robert.Test@gmail.com', '0685974636', '48 rue de la Boustifaille Paris', 'Robert')];

  ngOnInit() {
  }

}
