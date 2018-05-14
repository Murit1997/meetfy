import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AficionesPage } from './aficiones';

@NgModule({
  declarations: [
    AficionesPage,
  ],
  imports: [
    IonicPageModule.forChild(AficionesPage),
  ],
})
export class AficionesPageModule {}
