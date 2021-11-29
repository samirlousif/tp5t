import { Component, OnInit } from '@angular/core';
import { Voiture } from '../../modele/voiture';
import { VoitureService } from '../../service/voiture.service';

@Component({
  selector: 'app-listvoitures',
  templateUrl: './listvoitures.component.html',
  styleUrls: ['./listvoitures.component.css']
})
export class ListvoituresComponent implements OnInit {

  rk:Voiture[]=[];
  constructor(private voitureService:VoitureService) { 
    
  }

  ngOnInit(): void {
    this.rk=this.voitureService.getVoitures();
  }

}
