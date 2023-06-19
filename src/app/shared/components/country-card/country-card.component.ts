import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/core/interfaces/i-country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() country!: ICountry;
  constructor() { }

  ngOnInit() {
  }

}
