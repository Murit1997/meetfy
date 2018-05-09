import { MainpagePage } from './../mainpage/mainpage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, ) {
  }
  async login(user: User) {
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    this.navCtrl.push(MainpagePage);
     }catch(e){
      console.error(e);
    }
  }
  async register() {
    this.navCtrl.push(RegisterPage);
  }
}

