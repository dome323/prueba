import {Component,inject,OnInit, signal
} from '@angular/core';
import { HeroComponent } from '../../Components/hero/hero';
import { CardComponent } from '../../shared/components/card/card';
import { Country } from '../countries/models/models.interface';
import { CountryService } from '../countries/services/country.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CardComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  private countryService = inject(CountryService);

  items = signal<Country[]>([]);

  isLoading = signal(true);

  ngOnInit(): void {

    this.countryService
      .getCountries()
      .subscribe({

        next: (data) => {

          this.items.set(data);

          this.isLoading.set(false);

        },

        error: (err) => {

          console.log(err);

          this.isLoading.set(false);

        }

      });

  }

}