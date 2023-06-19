import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryCardComponent } from './components/country-card/country-card.component';

@NgModule({
  declarations: [
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CountryCardComponent,
  ],
})
export class SharedModule {}
