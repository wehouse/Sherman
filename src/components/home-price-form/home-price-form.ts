import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the HomePriceFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-price-form',
  templateUrl: 'home-price-form.html'
})
export class HomePriceFormComponent {

  private homePriceMLInput : FormGroup;
  private homePrice;

  constructor( private formBuilder: FormBuilder, private http:Http ) {
    this.homePriceMLInput = this.formBuilder.group({
      zipcode: ['', Validators.minLength(5)],
      bedrooms: ['', Validators.minLength(1)],
      bathrooms: ['', Validators.minLength(1)],
      floors: ['', Validators.minLength(1)],
      sqft_above: ['', Validators.minLength(1)],
      sqft_basement: ['', Validators.minLength(1)],
      year_built: ['', Validators.minLength(1)],
      sqft_living: ['', Validators.minLength(1)],
      sqft_lot: ['', Validators.minLength(1)],
    });
  }
  logForm(){
    console.log(this.homePriceMLInput.value)
    
  }
  
  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
      zipcode: parseInt(this.homePriceMLInput.value.zipcode),
      bedrooms: parseFloat(this.homePriceMLInput.value.bedrooms),
      bathrooms: parseFloat(this.homePriceMLInput.value.bathrooms),
      floors: parseFloat(this.homePriceMLInput.value.floors),
      sqft_above: parseInt(this.homePriceMLInput.value.sqft_above),
      sqft_basement: parseInt(this.homePriceMLInput.value.sqft_basement),
      year_built: parseInt(this.homePriceMLInput.value.year_built),
      sqft_living: parseInt(this.homePriceMLInput.value.sqft_living),
      sqft_lot: parseInt(this.homePriceMLInput.value.sqft_lot),
    }
    
    this.http.post("https://wehouse-home-price-estimator.herokuapp.com/multiple-linear", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
        this.homePrice = parseFloat(data['_body']).toFixed(2);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

}
