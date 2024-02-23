import { Country } from "./country-interface";
import { Region } from  "./region.type";

export interface TermCountries {
  term: string;
  data: Country[];
}

export interface TermRegion {
  term?: Region;
  data: Country[];
}

export interface CacheStore{
  byCapital: TermCountries,
  byRegion: TermRegion,
  byCountry: TermCountries,
}
