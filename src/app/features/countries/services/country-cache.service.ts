import { Injectable } from '@angular/core';
import { Country } from '../models/models.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryCacheServices {

  private readonly key = 'country-cache';

  getById(id: number): Country | null {

    const map = this.readMap();

    return map[id] ?? null;
  }

  save(country: Country): void {

    const map = this.readMap();

    map[country.id] = country;

    localStorage.setItem(
      this.key,
      JSON.stringify(map)
    );
  }

  private readMap(): Record<number, Country> {

    const raw = localStorage.getItem(this.key);

    return raw ? JSON.parse(raw) : {};
  }
}