import { Component } from '@angular/core';
import{AngularFireAuth, AngularFireAuthModule} from'angularfire2/auth';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,public navParams:NavParams,private toast : ToastController,private afAuth: AngularFireAuth){
  }
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data=>{
      if( data && data.email && data.uid){
      this.toast.create({
        message:`Bienvenido ,${data.email}`,
        duration:3000
      }).present();
    }else{
      this.toast.create({
        message:`login incorrecto`,
        duration:3000
    }).present();
      }
    })
}
}

