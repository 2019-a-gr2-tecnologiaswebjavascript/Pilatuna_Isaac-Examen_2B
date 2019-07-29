import { Component } from '@angular/core';
import { SistemaOperativo } from '../modelo/sistema-operativo';
import { BaseDeDatosService } from '../servicios/datos/base-de-datos.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalCrearSOPage } from '../modal-crear-so/modal-crear-so.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaSistemas:SistemaOperativo[]=[];

  busqueda:string='';

  constructor(private readonly baseDeDatos:BaseDeDatosService, 
    public modalController: ModalController,
    //private modalService:NgbModal, 
    private router:Router
    ) { }

  ngOnInit() {
    //this.baseDeDatos.iniciarServicio();
    this.listaSistemas=this.baseDeDatos.obtenerListaSistemas();
    
  }
  
   async presentModal() {
    const modal = await this.modalController.create({
      component: ModalCrearSOPage
    });
     await modal.present();
  }


  eliminarSistema(id:number){
    this.listaSistemas=this.baseDeDatos.eliminarSistema(id);
  }



  cerrarModal(){
    //this.modalService.dismissAll();

  }

  buscarSistema(){
    this.listaSistemas=this.baseDeDatos.buscarSistema(this.busqueda);
  }

  verSistema(id:number,nombre:string){

    this.router.navigate(['/menu-aplicacion',{'id':id,'nombre':nombre}]);
  }

}
