import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-suppemployes',
  templateUrl: './suppemployes.component.html',
  styleUrls: ['./suppemployes.component.css']
})
export class SuppemployesComponent implements OnInit {
lesemployes: Employe[]= [];
  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.lesemployes=this.employeService.getEmployes();
  }
  supp(){
    this.employeService.deleteFirstEmploye();
  }
}
