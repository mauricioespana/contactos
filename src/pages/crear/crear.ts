import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {

  nombre= '';
  numero='';
  email='';
  facebook='';
  instagram='';
  twitter='';
  avatar = '';

  contactos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = navParams.get("contactos");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }
  clickAgregar(){
    if((this.nombre.length>0)&&(this.numero.length>0)){
      this.contactos.push({nombre: this.nombre, numero: this.numero, email: this.email, facebook: this.facebook, instagram: this.instagram, twitter: this.twitter, avatar: "../assets/imgs/avatar4.png"});
      this.navCtrl.pop();
    }
    else {
      const alert = this.alertCtrl.create({title: 'Whoops!', subTitle: 'Nombre y teléfono están vacíos', buttons: ['OK']});
      alert.present();
    }
  }

}
