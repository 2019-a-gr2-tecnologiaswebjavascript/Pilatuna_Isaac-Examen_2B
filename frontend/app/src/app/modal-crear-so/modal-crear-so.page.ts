import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SistemaOperativo } from '../modelo/sistema-operativo';
import { BaseDeDatosService } from '../servicios/datos/base-de-datos.service';

@Component({
  selector: 'app-modal-crear-so',
  templateUrl: './modal-crear-so.page.html',
  styleUrls: ['./modal-crear-so.page.scss'],
})
export class ModalCrearSOPage implements OnInit {

  inputNombre:string='';
  inputVersion:number;
  inputFecha:any=new Date();
  inputPesoGB:number;
  inputInstalado:boolean=false;
  constructor(private modalController:ModalController,private readonly baseDeDatos:BaseDeDatosService,) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
  guardarSistema(){
    var fechaLanzamiento:Date=new Date();
    const fechaArray=this.inputFecha.split("-");
    fechaLanzamiento.setFullYear(fechaArray[0],fechaArray[1],fechaArray[2])
    const nuevoSistema:SistemaOperativo={
      nombre:this.inputNombre,
      version:this.inputVersion,
      fecha:fechaLanzamiento,      
      peso_gb:this.inputPesoGB,
      instalado:this.inputInstalado,
      id:Date.now()

    }
    this.baseDeDatos.agregarSistema(nuevoSistema);
    this.closeModal();
    //this.modalService.dismissAll();
  }

}
