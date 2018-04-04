import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummerPage } from './summer';

@NgModule({
  declarations: [
    SummerPage,
  ],
  imports: [
    IonicPageModule.forChild(SummerPage),
  ],
})
export class SummerPageModule {}
