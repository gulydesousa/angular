export interface manufacturer_result {
  Count:          number;
  Message:        string;
  SearchCriteria: null;
  Results:        manufacturer[];
}

export interface manufacturer {
  Country:        string;
  Mfr_CommonName: null | string;
  Mfr_ID:         number;
  Mfr_Name:       string;
  VehicleTypes:   VehicleType[];
}

export interface smallManufacturer {
  Mfr_Name:       string;
}


export interface VehicleType {
  IsPrimary: boolean;
  Name:      string;
}



