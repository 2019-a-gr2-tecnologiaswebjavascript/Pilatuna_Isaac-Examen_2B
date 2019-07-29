import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from '../servicios/datos/base-de-datos.service';
import { DatosCajeroService } from '../servicios/servicios-cajero/datos-cajero.service';
import { ServicioCarritoService } from '../servicios/servicio-carrito/servicio-carrito.service';
import { Aplicacion } from '../modelo/aplicacion';
import { ItemCarrito } from '../modelo/item-carrito';
import { ItemCompra } from '../modelo/item-compra';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  listaAplicaciones:Aplicacion[]=[];
  carrito:ItemCarrito[]=[];

  nombre:string='';
  identificacion:string='';
  direccion:string='';
  telefono:string='';
  correo:string='';
  
  total=0;
  nombreCajero='';

  constructor(private readonly baseDeDatos:BaseDeDatosService, 
    private readonly datosCajero:DatosCajeroService,
    private readonly servicioCarrito:ServicioCarritoService,
    public alertController: AlertController
  ) {}


ngOnInit(){
  this.nombreCajero=this.datosCajero.obtenerNombreCajero();
  //this.baseDeDatos.iniciarServicio();
  this.listaAplicaciones=this.baseDeDatos.obtenerTodasLasAplicaciones();
}
agregarAplicacion(nombre:string,version:number,costo:number,id:number){
  const index=this.buscarEnCarrito(id);
  if(index==-1){
    this.agregarNuevoItem(nombre,version,costo,id);
  }else{
    this.sumarUnoAlItem(index,costo);
  }

}

sumarUnoAlItem(index:number,costo:number){
  var itemCarrito=this.carrito[index];
  itemCarrito.cantidad+=1;
  itemCarrito.costoTotal+=costo;
  itemCarrito.costoTotal=parseFloat(itemCarrito.costoTotal.toFixed(2));
  this.carrito[index]=itemCarrito;
  this.total+=costo;
  this.total=parseFloat(this.total.toFixed(2));
}

agregarNuevoItem(nombreInput:string,versionInput:number,costoInput:number,idInput:number){
  const itemCarrito:ItemCarrito={
    nombre:nombreInput,
    version:versionInput,
    costo:costoInput,
    cantidad:1,
    costoTotal:costoInput,
    id:idInput
  }
  this.carrito.push(itemCarrito);
  this.total=this.total+costoInput;
  this.total=parseFloat(this.total.toFixed(2));
}

buscarEnCarrito(id:number):number{
  var indice=-1;
  this.carrito.forEach(
    function(item,index,array){
      if(item.id==id){
        indice=index;
      }
    }
  );
  return indice;
}

eliminarAplicacion(id:number,costo:number){
  const index=this.buscarEnCarrito(id);
  if(index!=-1){
    this.restarUnoAlItem(index,costo);
  }
}
restarUnoAlItem(index:number,costo:number){
  var itemCarrito=this.carrito[index];
  itemCarrito.cantidad-=1;
  itemCarrito.costoTotal-=costo;
  itemCarrito.costoTotal=parseFloat(itemCarrito.costoTotal.toFixed(2));
  this.carrito[index]=itemCarrito;
  this.total-=costo;
  this.total=parseFloat(this.total.toFixed(2));
  if(itemCarrito.cantidad==0){
    this.carrito.splice(index,1);
  }
}

finalizarCompra(){
  if(this.total>0){
    const itemCompra:ItemCompra={
    nombreComprador:this.nombre,
    nombreCajero:this.nombreCajero,
    identificacion:this.identificacion,
    direccion:this.direccion,
    telefono:this.telefono,
    correo:this.correo,
    carrito:this.carrito,
    total:this.total

    }
    this.servicioCarrito.agregarVenta(itemCompra);
    this.total=0;
    this.carrito=[];
    this.presentAlertCorrecto();
  }else{
    this.presentAlertIncorrecto();
  }
  
}

async presentAlertCorrecto() {
  const alert = await this.alertController.create({
    header: 'Compra Satisfactoria',
    message: 'La compra ha sido realizada con éxito',
    buttons: ['OK']
  });

  await alert.present();
}

async presentAlertIncorrecto() {
  const alert = await this.alertController.create({
    header: 'Compra incorrecta',
    message: 'No puede realizar una compra sin objetos',
    buttons: ['OK']
  });

  await alert.present();
}

}
