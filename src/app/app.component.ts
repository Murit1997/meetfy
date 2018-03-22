import { RegisterPage } from './../pages/register/register';
import { SocialloginPage } from './../pages/sociallogin/sociallogin';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/Login/login';
import { MainpagePage } from '../pages/mainpage/mainpage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainpagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

