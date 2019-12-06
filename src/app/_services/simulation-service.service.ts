import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulationServiceService {

  constructor() { }

  traitement(nationalite, aides, statut, logement) {
    let tab = [0, 0, 0, 0, 0, 0]; // 6 items
    if (nationalite == 0 && !aides[8]) {
      tab[0] = 6734;
    }
    if (aides[8] || aides[9] && statut[0]) {
      tab[1] = 1200;
    }
    if (!nationalite[0] && statut[0] && aides[4]) {
      tab[2] = 2000;
    }
    if (!nationalite[0] && !aides[4] && logement[3]) {
      tab[3] = 3600;
    }
    if (statut[0] && statut[1]) {
      tab[4] = 4831;
    }
    if (statut[4]) {
      tab[5] = 1600;
    }

    return tab;

  }

  // Entrees
  prenom = "";
  birthDate = 0;
  codePostal = 0;
  nationalite = 0; //0 to 2
  statut = []; // 5 cases
  amour = 0; // 0 to 1
  logement = 0; // 0 to 3
  mensualite = 0; // montant
  aides = []; // 10 cases

  // Sorties
  resultat = this.traitement(); // selon le traitement

  


}





