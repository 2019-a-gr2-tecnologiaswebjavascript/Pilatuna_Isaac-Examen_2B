import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BaseDeDatosService } from '../servicios/datos/base-de-datos.service';
import { Aplicacion } from '../modelo/aplicacion';

@Component({
  selector: 'app-modal-crear-app',
  templateUrl: './modal-crear-app.page.html',
  styleUrls: ['./modal-crear-app.page.scss'],
})
export class ModalCrearAPPPage implements OnInit {
  @Input() idSistema;
  inputNombre:string='';
  inputVersion:number;
  inputFecha:any=new Date();
  inputURL:string='';
  inputPesoGB:number;
  inputCosto:number;
  idSistemaOperativo:number;

  constructor(private modalController:ModalController,
    private navParams:NavParams,
    private readonly baseDeDatos:BaseDeDatosService) { 
      this.idSistemaOperativo=this.navParams.get('idSistema');
    }

  ngOnInit() {
  }
  
  closeModal(){
    this.modalController.dismiss();
  }

  guardarApp(){
    var fechaLanzamiento:Date=new Date();
    const fechaArray=this.inputFecha.split("-");
    fechaLanzamiento.setFullYear(fechaArray[0],fechaArray[1],fechaArray[2])
    const nuevaApp:Aplicacion={
      nombre:this.inputNombre,
      version:this.inputVersion,
      url:this.inputURL,
      fecha:fechaLanzamiento,      
      peso_gb:this.inputPesoGB,
      costo:this.inputCosto,
      sistemaOperativoId:this.idSistemaOperativo,
      id:Date.now()

    }
    this.baseDeDatos.agregarAplicacion(nuevaApp);
    this.baseDeDatos.obtenerListaAplicaciones(this.idSistemaOperativo);
    this.closeModal();
  }


}
