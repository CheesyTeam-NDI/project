export class Reponses {
  description: string;
  resourceTitle: string;
  image: number;
  contactTitle: string;
  geolocalisation: string;
  email: string;
  tel: string;
  adress: string;
  nom: string;

  constructor(description: string, resourceTitle: string, image: number, contactTitle: string, geolocalisation: string, email: string, tel: string, adress: string, nom: string) {
    this.description = description;
    this.resourceTitle = resourceTitle;
    this.image = image;
    this.contactTitle = contactTitle;
    this.geolocalisation = geolocalisation;
    this.email = email;
    this.tel = tel;
    this.adress = adress;
    this.nom = nom;
  }
}
