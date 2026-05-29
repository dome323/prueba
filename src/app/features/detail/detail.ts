import {Component,inject,OnInit,signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../countries/models/models.interface';
import { CountryService } from '../countries/services/country.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class DetailComponent implements OnInit {

  private route = inject(ActivatedRoute);

  private countryService = inject(CountryService);

  country = signal<Country | null>(null);

  ngOnInit(): void {

    const name = this.route.snapshot.paramMap.get('name');

    if (!name) return;

    this.countryService
      .getCountryByName(name)
      .subscribe({

        next: (data) => {

          this.country.set(data[0]);

        }

      });

  }

}