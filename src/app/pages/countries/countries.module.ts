import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CountriesRoutingModule,
    SharedModule
  ],
  declarations: [
    CountriesComponent
  ]
})
export class CountriesModule { }
