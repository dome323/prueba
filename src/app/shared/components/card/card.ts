import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Country } from '../../../features/countries/models/models.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {

  item = input.required<Country>();

}