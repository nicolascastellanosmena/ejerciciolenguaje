import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { digimon } from '../common/nico';

@Injectable({
  providedIn: 'root'
})
export class ApiNicoService {

  constructor(private dataService: HttpClient) { }
   getData(): Observable<digimon>{

    return this.dataService.get<digimon>("assets/digimon.json")
  }


}
