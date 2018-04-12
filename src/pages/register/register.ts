import { LoginPage } from './../Login/login';
import { Profile } from './../../models/Profile';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  profile = {} as Profile;
  constructor(private afAuth: AngularFireAuth, navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabaseModule) {
  }

  async Register(user: User,profile:Profile) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      console.log(result)
    }
    catch (e) {
      console.error(e);
    }
  }
}
