import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsSummaryPage } from './news-summary';

@NgModule({
  declarations: [
    NewsSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsSummaryPage),
  ],
})
export class NewsSummaryPageModule {}
