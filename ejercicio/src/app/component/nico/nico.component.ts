import { Component, OnInit } from '@angular/core';
import { ApiNicoService } from '../../data/api-nico.service';
import { digimon } from '../../common/nico';

@Component({
  selector: 'app-nico',
  standalone: true,
  imports: [],
  templateUrl: './nico.component.html',
  styleUrl: './nico.component.css'
})
export class NicoComponent implements OnInit{
  digimon !: digimon 
  constructor(private servicio:ApiNicoService){}

  ngOnInit(): void {
    this.getLoad()  
  }
  getLoad() {
    this.servicio.getData().subscribe(
      (next:digimon)=>{
        this.digimon=next
      },
      (error)=>{
        console.log("error");
      },
      ()=>{
        console.log("completed");
      }
    );
  }
    
}
