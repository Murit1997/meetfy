import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DreamTheaterPage } from '../dream-theater/dream-theater';

/**
 * Generated class for the ListEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list-events.html',
})
export class ListEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  DreamTheater(){
    this.navCtrl.push(DreamTheaterPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventsPage');
  }

}
