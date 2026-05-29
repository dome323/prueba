import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { Country } from '../models/models.interface';
export class ApiService {
  private http = inject(HttpClient);
  // URL base solicitada en la rúbrica
  private apiUrl = 'https://restcountries.com/v3.1';

  getItems(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all?fields=name,capital,flags`).pipe(
      delay(2000) // Retardo simulado de 2 segundos de la rúbrica
    );
  }

  getItemById(id: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${id}?fields=name,flags,capital,maps,population`);
  }
}