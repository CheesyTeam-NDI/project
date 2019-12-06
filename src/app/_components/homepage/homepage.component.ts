import { Component, OnInit } from '@angular/core';
import { Aide } from 'src/app/_models/aides';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  aides: Aide[];
  constructor() {

}



  ngOnInit() {
    this.aides = [new Aide("Le Crous","Le CROUS est un établissement public ayant pour mission d'améliorer les conditions de vie et de travail des étudiants.",1),
                  new Aide("La CAF","La CAF peut fournir des aides au logement aux étudiants.",2),
                  new Aide("Les bourses","Il est également possible de demander des bourses selon votre situation sociale, si vous êtes un étudiant ERASMUS...",3),
                  new Aide("La Mission Locale","La mission locale oriente et suit le parcours des anciens étudiants dans un but d'insertion professionnelle et sociale.",4),
                  new Aide("L'Allocation Logement","Action Logement peut fournir une subvention allégeant la quittance loyer.",5)];

  }

}
