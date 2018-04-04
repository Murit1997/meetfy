import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CiencePage } from './cience';

@NgModule({
  declarations: [
    CiencePage,
  ],
  imports: [
    IonicPageModule.forChild(CiencePage),
  ],
})
export class CiencePageModule {}
