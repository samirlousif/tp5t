import { Component, OnInit } from '@angular/core';
import { Voiture } from '../../modele/voiture';
import { VoitureService } from '../../service/voiture.service';

@Component({
  selector: 'app-infosvoitures',
  templateUrl: './infosvoitures.component.html',
  styleUrls: ['./infosvoitures.component.css']
})
export class InfosvoituresComponent implements OnInit {
test:boolean=false;
teste:boolean=false;
test1:boolean=false;
test2:boolean=false;

rk:Voiture[]=[];
  constructor(private voitureService:VoitureService) { }


  ngOnInit(): void {
  }
  lf(marque: string){
    return this.voitureService.getVoituresByMarque(marque);
  }
  nc(modele:string){
    return this.voitureService.getNbVoitures(modele);
  }
  faza(x:string){
    return this.voitureService.getVoitureByNumSerie(x);
  }
  affiche(){
    if (this.test==false) { this.test=true;}
    else {this.test=false};
  }
  affich(){
    if (this.teste==false) { this.teste=true;}
    else {this.teste=false};
  }

  affi(){
    if (this.test1==false) { this.test1=true;}
    else {this.test1=false};
  }
  aff(){
    if (this.test2==false) { this.test2=true;}
    
  }
}
