import { Injectable } from '@angular/core';
import { Voiture } from '../modele/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  voitures:Voiture[] =[
    new Voiture("Ford", "Fiesta", "141TU4930"),
    new Voiture("Renault", "Clio", "125TU1111"),
    new Voiture("Ford", "Fiesta", "128TU1587"),
    new Voiture("Renault", "Clio", "141TU4444"),
    new Voiture("Ford", "Focus", "158TU6987"),
    new Voiture("Renault", "Clio", "201TU2222")
    ]
    getVoitures(){
    return this.voitures;
    }
    getVoitureByNumSerie(numSerie:string){
      return this.voitures.find(x => x.numSerie==numSerie);
    }
    getVoituresByMarque(marque:string){
      return this.voitures.filter(x => x.marque==marque);
    }
    getNbVoitures(modele :string){
      return this.voitures.filter(x => x.modele==modele).length;
    }
  
  constructor() { }
}
