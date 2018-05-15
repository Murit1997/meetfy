import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AficionesPage } from '../aficiones/aficiones';

/**
 * Generated class for the PersonalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personality',
  templateUrl: 'personality.html',
})
export class PersonalityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalityPage');
  }
  async nextPage(){
    this.navCtrl.push(AficionesPage);
  }
     
}

