import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balade } from '../models/balade.model';

@Injectable({
  providedIn: 'root'
})
export class BaladeService {

  private apiUrl = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) { }

  getBaladeByCategory(idCategory: number): Observable<Balade[]> {
    return this.httpClient.get<Balade[]>(`${this.apiUrl}/${idCategory}/balade`);
  }
}
