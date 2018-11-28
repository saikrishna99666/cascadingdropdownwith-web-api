

export interface State {
  stateId: number;
  stateName: string;
  countryId: number;
}

export interface Cities {
  CityId: number;
  cityName: string;
  stateId: number;
}
export interface Country {
  countryId: number;
  countryName: string;
  stateDTO: StateDTO[];
}

export interface StateDTO {
  stateId: number;
  stateName: string;
  countryId: number;
  cityDTO: any[];
}
