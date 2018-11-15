import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { CrearPage } from '../crear/crear';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactos = [
    {
      nombre : "Pablo Blanco",
      numero: "(33) 3967 5554",
      email: "pabloblanco@mail.com",
      facebook: "@pabloblanco",
      instagram: "@pabloblanco",
      twitter: "@pabloblanco",
      avatar: "../assets/imgs/avatar2.png"
    },
    {
      nombre : "Ximena Ortiz",
      numero: "(33)  3142 4718",
      email: "ximeortiz@mail.com",
      facebook: "@ximenaortiz",
      instagram: "@ximenaortiz",
      twitter: "@ximenaortiz",
      avatar: "../assets/imgs/avatar3.jpg"
    },
    {
      nombre : "Paulina Castellanos",
      numero: "(33) 1888 8880",
      email: "paucastellanos@mail.com",
      facebook: "@paucastellanos",
      instagram: "@paucastellanos",
      twitter: "@paucastellanos",
      avatar: "../assets/imgs/avatar1.png"
    }
  ];

  cont= ContactoPage;
  crear = CrearPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  clickCrear(){
    this.navCtrl.push(this.crear, {contactos: this.contactos});
  }
  clickContacto(c){
    this.navCtrl.push(this.cont, {contacto:c});
  }

}
