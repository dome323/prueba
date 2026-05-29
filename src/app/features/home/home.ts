import { Component, signal } from '@angular/core';
import { HeroComponent } from '../../Components/hero/hero';
import { CardComponent } from '../../shared/components/card/card';
import { Country } from '../countries/models/models.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  items = signal<Country[]>([
    {
      id: 1,
      name: {
        common: 'Ecuador',
        official: 'Republic of Ecuador'
      },
      flags: {
        png: 'https://flagcdn.com/w320/ec.png',
        alt: 'Bandera Ecuador'
      },
      capital: ['Quito'],
      population: 18000000,
      region: 'South America'
    },

    {
      id: 2,
      name: {
        common: 'Perú',
        official: 'Republic of Peru'
      },
      flags: {
        png: 'https://flagcdn.com/w320/pe.png',
        alt: 'Bandera Perú'
      },
      capital: ['Lima'],
      population: 33000000,
      region: 'South America'
    }
  ]);

  isLoading = signal(false);

  error = signal('');

}