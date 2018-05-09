import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personality',
  templateUrl: 'personality.html',
})
export class PersonalityPage {
activo = false;
ambicioso = false;
conservador = false;
divertido = false;
dominante = false;
egolatra = false;
extrovertido = false;
mezquino = false;
negativo = false;
pacifico = false;
perezoso = false;
pesimista = false;
picaro = false;
posesivo = false;
positivo = false;
reservado = false;
sensible = false;
timido = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalityPage');
  }
  Activo($event){
    this.activo = !this.activo
  }
  Ambicioso($event){
    this.ambicioso = !this.ambicioso;
  }
  Conservador($event){
    this.conservador = !this.conservador;
  }
  Divertido($event){
    this.divertido = !this.divertido;
  }
  Dominante($event){
    this.dominante = !this.dominante;
  }
  Egolatra($event){
    this.egolatra = !this.egolatra;
  }
  Extrovertido($event){
    this.extrovertido = !this.extrovertido;
  }
  Mezquino($event){
    this.mezquino = !this.mezquino;
  }
  Negativo($event){
    this.negativo = !this.negativo;
  }
Pacifico($event){
  this.pacifico = !this.pacifico;
}
Perezoso($event){
  this.perezoso = !this.perezoso;
}
Pesimista($event){
  this.pesimista = !this.pesimista;
}
Picaro($event){
  this.picaro = !this.picaro;
}
Posesivo($event){
  this.posesivo= !this.posesivo;
}
Positivo($event){
  this.positivo = !this.positivo;
}
Reservado($event){
  this.reservado = !this.reservado;
}
Sensible($event){
  this.sensible = !this.sensible;
}
Timido($event){
  this.timido= !this.timido;
}
}
