
import { RegisterPage } from './../register/register';
import { WritePage } from './../Activities/write/write';
import { SummerPage } from './../Activities/summer/summer';
import { SnowPage } from './../Activities/snow/snow';
import { SexPage } from './../Activities/sex/sex';
import { MapPage } from './../Activities/map/map';
import { GamesPage } from './../Activities/games/games';
import { DrinkPage } from './../Activities/drink/drink';
import { CiencePage } from './../Activities/cience/cience';
import { BuyPage } from './../Activities/buy/buy';
import { PcPage } from './../Activities/pc/pc';
import { MusicPage } from './../Activities/music/music';
import { MoviePage } from './../Activities/movie/movie';
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

public profile
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }
  async eventpage(pagina: number) {
    switch (pagina) {
      case 1:
        this.navCtrl.push(MoviePage);
        break;
      case 2:
        this.navCtrl.push(MusicPage);
        break;
      case 3:
        this.navCtrl.push(PcPage);
        break;
      case 4:
        this.navCtrl.push(CiencePage);
        break;
      case 5:
        this.navCtrl.push(MapPage);
        break;
      case 6:
        this.navCtrl.push(BuyPage);
        break;
      case 7:
        this.navCtrl.push(SnowPage);
        break;
      case 8:
        this.navCtrl.push(DrinkPage);
        break;
      case 9:
        this.navCtrl.push(GamesPage);
        break;
      case 10:
        this.navCtrl.push(SexPage);
        break;
      case 11:
        this.navCtrl.push(WritePage);
        break;
      case 12:
        this.navCtrl.push(SummerPage);
        break;
      default:
    }
  }
}




