import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePricePage} from '../home-price/home-price'
import {NewsSummaryPage} from '../news-summary/news-summary'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homePricePage = HomePricePage;
  newsSummaryPage = NewsSummaryPage;
  
  constructor(public navCtrl: NavController) {

  }

}
