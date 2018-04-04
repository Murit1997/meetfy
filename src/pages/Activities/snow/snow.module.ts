import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnowPage } from './snow';

@NgModule({
  declarations: [
    SnowPage,
  ],
  imports: [
    IonicPageModule.forChild(SnowPage),
  ],
})
export class SnowPageModule {}
