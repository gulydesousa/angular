export interface model_result {
  Count:          number;
  Message:        string;
  SearchCriteria: string;
  Results:        model[];
}

export interface model {
  Make_ID:    number;
  Make_Name:  string;
  Model_ID:   number;
  Model_Name: string;
}


