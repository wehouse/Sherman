import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the NewsSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-summary',
  templateUrl: 'news-summary.html',
})
export class NewsSummaryPage {
  
  private textSummary:String;
  private textSummarizerInput : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private http:Http ) {
    this.textSummarizerInput = this.formBuilder.group({
      url: [''],
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsSummaryPage');
  }

  postRequest() {
    var headers = new Headers();
    headers.append("X-Mashape-Key", "nimwzaUILQmshKhwoDGi2Ni5imrFp1POE6djsnnyFddHPTAXNx");
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
      "url": this.textSummarizerInput.value.url,
      "text": "",
      "sentnum": 5  
    }
    
    this.http.post("https://textanalysis-text-summarization.p.mashape.com/text-summarizer", postParams, options)
      .subscribe(data => {
        let text = JSON.parse(data['_body']);
        this.textSummary = text.sentences.join(" ");
       }, error => {
        console.log(error);// Error getting the data
      });
  }

}
