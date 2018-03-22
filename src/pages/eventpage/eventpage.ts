                                                                                                                                       import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventpage',
  templateUrl: 'eventpage.html',
})
export class EventpagePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventpagePage');
  }

}
                                                            