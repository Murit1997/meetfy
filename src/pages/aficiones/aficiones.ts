import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../Login/login';

/**
 * Generated class for the AficionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aficiones',
  templateUrl: 'aficiones.html',
})
export class AficionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AficionesPage');
  }
async nextPage(){
  this.navCtrl.push(LoginPage);
}
}
