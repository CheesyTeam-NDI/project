import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ressources-details',
  templateUrl: './ressources-details.component.html',
  styleUrls: ['./ressources-details.component.scss']
})
export class RessourcesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  id: string;

  // Variables

  description: string;
  resourceTitle: string;
  image: number;
  contactTitle: string;
  geolocalisation: string;
  email: string;
  tel: string;
  adresse: string;
  nom: string;

  // Initialisation des variables
  ngOnInit() {
    this.resourceTitle = 'Titre';
    this.description = 'Description';
    this.geolocalisation = 'Zone Geolocalisation';
    this.image = 1;
    this.nom = 'Nom';
    this.email = 'contact@contact.fr';
    this.tel = '001122334455';
    this.adresse = '1 rue de Paris';

    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
    });

    // Based on the ID, get from the server and override the values

  }
}

