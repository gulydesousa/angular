
export interface PlacesResponse {
  suggestions: Suggestion[];
  attribution: string;
  response_id: string;
}

export interface Suggestion {
  name:              string;
  mapbox_id:         string;
  feature_type:      string;
  place_formatted:   string;
  context:           Context;
  language:          string;
  maki:              string;
  metadata:          Metadata;
  distance:          number;
  name_preferred?:   string;
  address?:          string;
  full_address?:     string;
  poi_category?:     string[];
  poi_category_ids?: string[];
  brand?:            string[];
  brand_id?:         string[];
  external_ids?:     ExternalIDS;
}

export interface Context {
  country:   Country;
  region?:   Region;
  postcode?: Place;
  place?:    Place;
  address?:  Address;
  street?:   Place;
}

export interface Address {
  name:           string;
  address_number: string;
  street_name:    string;
}

export interface Country {
  id?:                  string;
  name:                 string;
  country_code:         string;
  country_code_alpha_3: string;
}

export interface Place {
  id?:  string;
  name: string;
}

export interface Region {
  id:               string;
  name:             string;
  region_code:      string;
  region_code_full: string;
}

export interface ExternalIDS {
  foursquare: string;
  safegraph:  string;
}

export interface Metadata {
}
