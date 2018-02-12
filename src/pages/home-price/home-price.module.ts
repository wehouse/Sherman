import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePricePage } from './home-price';

@NgModule({
  declarations: [
    HomePricePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePricePage),
  ],
})
export class HomePricePageModule {}
