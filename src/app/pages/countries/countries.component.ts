import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICountry } from 'src/app/core/interfaces/i-country';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { HeaderService } from 'src/app/core/services/header/header.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: ICountry[] = [];
  filteredCountries: ICountry[] = [];
  filterValue: string = '';
  error: string = '';
  countryIds: string = '';

  private subscription!: Subscription;

  constructor(
    private countriesService: CountriesService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.subscription = this.countriesService.getCountries().subscribe((res) => {
      this.countries = res.country;
      this.filteredCountries = [...this.countries];
      this.headerService.setReportName(res.name)
    })
  }

  filterCountries() {
    if (!this.filterValue) {
      this.filteredCountries = [...this.countries];
      return;
    }

    this.filteredCountries = this.countries.filter(country => country.country_id.toLowerCase().includes(this.filterValue.toLowerCase()));
  }

  addCountries() {
    if (!this.countryIds) {
      return;
    }

    const enteredIds = this.countryIds.split(',').map(id => id.trim().toLowerCase());
    const selectedCountries: ICountry[] = [];

    for (const id of enteredIds) {
      const country = this.countries.find(c => c.country_id.toLowerCase() === id);
      if (country) {
        selectedCountries.push(country);
      } else {
        this.error = `Country with ID '${id}' does not exist.`;
        return;
      }
    }

    const probability = selectedCountries.reduce((total, country) => total + country.probability, 0) / selectedCountries.length;

    const newCountry: ICountry = {
      country_id: enteredIds.join('-').toUpperCase(),
      probability,
      isNew: true
    };

    this.filteredCountries = [...this.filteredCountries, newCountry];
    this.countryIds = '';
    this.error = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
