import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StateserviceService {
  public  BASE =  'http://192.168.0.12:2223/api';
  constructor( private http: Http ) { }

  getAllCountries() {
    return this.http.get(this.BASE + '/countries').map((response: any) => response.json());
}
getAllStates(countryId) {
  console.log(countryId);
  return this.http.get(this.BASE + '/States/GetStatesbyCountryId/' + countryId).map((response: any) => response.json());
}

getAllCities(stateId) {
  console.log(stateId);
  return this.http.get(this.BASE + '/Cities/GetcitiesByStateId/' + stateId).map((response: any) => response.json());
}

}

