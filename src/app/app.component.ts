import { PersonalityPage } from './../pages/personality/personality';
import { LoginPage } from './../pages/Login/login';
import { MoviePage } from './../pages/Activities/movie/movie';

import { RegisterPage } from './../pages/register/register';
import { SocialloginPage } from './../pages/sociallogin/sociallogin';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { MainpagePage } from '../pages/mainpage/mainpage';
import {App} from 'ionic-angular';
import { AficionesPage } from '../pages/aficiones/aficiones';
import { CreateEventPage } from '../pages/create-event/create-event';
import { ListEventsPage } from '../pages/list-events/list-events';
import { DreamTheaterPage } from '../pages/dream-theater/dream-theater';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = DreamTheaterPage
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private app:App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  logout(){
    console.log("Logout");
    this.app.getRootNav().setRoot(MoviePage);
}  
  }


