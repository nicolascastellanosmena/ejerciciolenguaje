import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChristianInterface } from '../common/christian-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiChristianService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ChristianInterface>{
    return this.http.get<ChristianInterface>("assets/ChristianData.json")
  }
}
