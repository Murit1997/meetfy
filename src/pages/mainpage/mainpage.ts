import { MusicPage } from './../Activities/music/music';
import { MoviePage } from './../Activities/movie/movie';

import { EventpagePage } from './../eventpage/eventpage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {
  pagina:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    }
    eventpage(pagina){
      if(pagina=1){
        this.navCtrl.push(MoviePage);
      }else if(pagina=2){
        this.navCtrl.push(MusicPage);
      }else{
        
      }
    }
}



