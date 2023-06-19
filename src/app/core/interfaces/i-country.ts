export interface ICountries {
  country: ICountry[],
  name: string;
}


export interface ICountry {
  country_id: string,
  probability: number;
  isNew?: boolean;
}
