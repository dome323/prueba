import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  private apiUrl =
    'https://restcountries.com/v3.1/all?fields=name,capital,flags';

  getCountries() {

    return this.http.get<Country[]>(this.apiUrl);

  }

  getCountryByName(name: string) {

    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,maps,population`
    );

  }

}