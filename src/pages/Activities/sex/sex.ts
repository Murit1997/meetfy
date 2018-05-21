import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateEventPage } from '../../create-event/create-event';

/**
 * Generated class for the SexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sex',
  templateUrl: 'sex.html',
})
export class SexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SexPage');
  }
  createEvent(){
    this.navCtrl.push(CreateEventPage)
  }

}
