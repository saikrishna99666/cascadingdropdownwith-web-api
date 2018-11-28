
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, State, Cities } from './models/states';
import { StateserviceService } from './stateservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Country: Country[];
  state: State[];
  city: Cities[];
  Countrys: any;
  cal_country: any[];
  cal_state: any[];
  cal_city: any[];
  constructor(private ApiService: StateserviceService) {
  }
// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
  this.ApiService.getAllCountries().subscribe(data => {
    console.log(data);
  this.Country = data;
  });
}

onCountryCSelect(countryId) {
  this.ApiService.getAllStates(countryId).subscribe(data => {
  this.state = data;
  });
    }

    onStateSelect(stateId) {
  this.ApiService.getAllCities(stateId).subscribe(data => {
  this.city = data;
  });
    }


}
