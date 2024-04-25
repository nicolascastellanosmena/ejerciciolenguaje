import { Component, OnInit } from '@angular/core';
import { ApiChristianService } from '../../data/api-christian.service';
import { ChristianInterface } from '../../common/christian-interface';

@Component({
  selector: 'app-christian',
  standalone: true,
  imports: [],
  templateUrl: './christian.component.html',
  styleUrl: './christian.component.css'
})
export class ChristianComponent implements OnInit{
    api!: ChristianInterface;
    constructor(private data: ApiChristianService){
      
    }
    

    ngOnInit(): void {
      this.getLoad();
    }

    getLoad(): void {
      this.data.getData().subscribe(
        (next: ChristianInterface) => {
          // Manejo del dato recibido
          this.api = this.corregido(next);
        },
        err => {
          // Manejo del error
          console.error('Error');
        },
        () => {
          // Manejo de la finalización
          console.log("Completed")
        }
      );
    }

    corregido(data: ChristianInterface): ChristianInterface{
      let api: ChristianInterface = {cards : []}
    for (let i = 0; i < data.cards.length; i++) {
      if (data.cards[i].imageUrl !== undefined) {
        api.cards.push(data.cards[i])
      }
    }
    return api
      }
  }
