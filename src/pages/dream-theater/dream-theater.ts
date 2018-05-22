import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListEventsPage } from '../list-events/list-events';

/**
 * Generated class for the DreamTheaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dream-theater',
  templateUrl: 'dream-theater.html',
})
export class DreamTheaterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DreamTheaterPage');
  }
  Music(){
    this.navCtrl.push(ListEventsPage);
  }

}
