import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aplicacion } from '../modelo/aplicacion';
import { BaseDeDatosService } from '../servicios/datos/base-de-datos.service';
import { ModalController } from '@ionic/angular';
import { ModalCrearAPPPage } from '../modal-crear-app/modal-crear-app.page';

@Component({
  selector: 'app-menu-aplicacion',
  templateUrl: './menu-aplicacion.page.html',
  styleUrls: ['./menu-aplicacion.page.scss'],
})
export class MenuAplicacionPage implements OnInit {

  sistemaOperativo:string='';
  idSistemaOperativo:number;
  listaAplicaciones:Aplicacion[]=[];
  busqueda:string='';

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private readonly baseDeDatos:BaseDeDatosService,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.sistemaOperativo=this.route.snapshot.paramMap.get('nombre');
    this.idSistemaOperativo=parseInt(this.route.snapshot.paramMap.get('id'));
    this.listaAplicaciones=this.baseDeDatos.obtenerListaAplicaciones(this.idSistemaOperativo);
  }

  return(){
    this.router.navigate(['/tabs/tab2']);
  }

  async presentModal() {
    
    const modal = await this.modalController.create({
      component: ModalCrearAPPPage,
      componentProps:{
        'idSistema':this.idSistemaOperativo
      }
      
    });
     await modal.present();
  }

  buscarApp(){
    this.listaAplicaciones=this.baseDeDatos.buscarAplicacion(this.busqueda,this.idSistemaOperativo);
  }
  eliminarAplicacion(id:number){
    this.baseDeDatos.eliminarAplicacion(id);
    this.listaAplicaciones=this.baseDeDatos.obtenerListaAplicaciones(this.idSistemaOperativo);
  }

}
