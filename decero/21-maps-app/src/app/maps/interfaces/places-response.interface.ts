
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



export interface FeatureResponse {
  type:        string;
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  type:       string;
  geometry:   Geometry;
  properties: Properties;
}

export interface Geometry {
  coordinates: number[];
  type:        string;
}

export interface Properties {
  name:               string;
  mapbox_id:          string;
  feature_type:       string;
  address:            string;
  full_address:       string;
  place_formatted:    string;
  context:            Context;
  coordinates:        Coordinates;
  language:           string;
  maki:               string;
  poi_category:       string[];
  poi_category_ids:   string[];
  external_ids:       ExternalIDS;
  metadata:           Metadata;
  operational_status: string;
}


export interface Address {
  id:             string;
  name:           string;
  address_number: string;
  street_name:    string;
}

export interface Country {
  id?:                   string;
  name:                 string;
  country_code:         string;
  country_code_alpha_3: string;
}

export interface Place {
  id?:   string;
  name: string;
}

export interface Region {
  id:               string;
  name:             string;
  region_code:      string;
  region_code_full: string;
}

export interface Coordinates {
  latitude:        number;
  longitude:       number;
  routable_points: RoutablePoint[];
}

export interface RoutablePoint {
  name:      string;
  latitude:  number;
  longitude: number;
}

export interface ExternalIDS {
  iata:       string;
  foursquare: string;
}

export interface Metadata {
}
