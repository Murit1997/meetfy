import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventpagePage } from './eventpage';

@NgModule({
  declarations: [
    EventpagePage,
  ],
  imports: [
    IonicPageModule.forChild(EventpagePage),
  ],
})
export class EventpagePageModule {}
