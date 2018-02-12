import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePricePage} from '../home-price/home-price'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homePricePage = HomePricePage;
  constructor(public navCtrl: NavController) {

  }

}
