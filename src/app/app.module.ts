import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HomePricePage} from '../pages/home-price/home-price'
import {HomePriceFormComponent} from '../components/home-price-form/home-price-form'
import {NewsSummaryPage} from '../pages/news-summary/news-summary'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePricePage,
    HomePriceFormComponent,
    NewsSummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePricePage,
    NewsSummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
