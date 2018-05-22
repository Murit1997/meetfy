import { CiencePage } from './../pages/Activities/cience/cience';
import { SexPage } from './../pages/Activities/sex/sex';
import { PcPage } from './../pages/Activities/pc/pc';
import { MapPage } from './../pages/Activities/map/map';
import { GamesPage } from './../pages/Activities/games/games';
import { DrinkPage } from './../pages/Activities/drink/drink';
import { BuyPage } from './../pages/Activities/buy/buy';
import { WritePage } from './../pages/Activities/write/write';
import { SocialloginPage } from './../pages/sociallogin/sociallogin';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{MainpagePage} from './../pages/mainpage/mainpage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/Login/login';
import{AngularFireAuth, AngularFireAuthModule} from'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { RegisterPage } from '../pages/register/register';
import { Facebook } from '@ionic-native/facebook'
import { MusicPage } from '../pages/Activities/music/music';
import { MoviePage } from '../pages/Activities/movie/movie';
import { SnowPage } from '../pages/Activities/snow/snow';
import { SummerPage } from '../pages/Activities/summer/summer';
import { GoogleMaps } from '@ionic-native/google-maps';
import { PersonalityPage } from '../pages/personality/personality';
import { AficionesPage } from '../pages/aficiones/aficiones';
import { CreateEventPage } from '../pages/create-event/create-event';
import { ListEventsPage } from '../pages/list-events/list-events';
import { DreamTheaterPage } from '../pages/dream-theater/dream-theater';


@NgModule({
  declarations: [
    MyApp,
    MainpagePage,
    LoginPage,
    RegisterPage,
    SocialloginPage,
    MoviePage,
    MusicPage,
    WritePage,
    BuyPage,
    DrinkPage,
    GamesPage,
    MapPage,
    PcPage,
    SexPage,
    SnowPage,
    SummerPage,
    CiencePage,
    PersonalityPage,
    AficionesPage,
    CreateEventPage,
    ListEventsPage,
    DreamTheaterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainpagePage,
    LoginPage,
    RegisterPage,
    SocialloginPage,
    MoviePage,
    MusicPage ,
    WritePage,
    BuyPage,
    DrinkPage,
    GamesPage,
    MapPage,
    PcPage,
    SexPage,
    SnowPage,
    SummerPage,
    CiencePage,
    PersonalityPage,
    AficionesPage,
    CreateEventPage,
    ListEventsPage,
    DreamTheaterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
