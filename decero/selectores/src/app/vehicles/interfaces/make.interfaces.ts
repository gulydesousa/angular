export interface make_result {
  Count:          number;
  Message:        string;
  SearchCriteria: string;
  Results:        make[];
}

export interface make {
  Make_ID:   number;
  Make_Name: string;
  Mfr_Name:  string;
}


