import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicios/servicio-carrito/servicio-carrito.service';
import { Factura } from '../modelo/factura';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private readonly servicioCarrito:ServicioCarritoService) { }
  listaFacturas:Factura[]=[];
  busqueda:string='';
  inputTipoBusqueda:boolean=true;
  flag:boolean=true;
  
  ngOnInit() {
    this.servicioCarrito.iniciarServicio();
    this.listaFacturas=this.servicioCarrito.obtenerFacturas();
    console.log(this.listaFacturas);
    
  }

  buscarPorCajero(){
    this.flag=false;
  }

  buscarPorCliente(){
    this.flag=true;
  }

  buscarFactura(){
    if(this.flag===true){
      this.listaFacturas=this.servicioCarrito.buscarFacturas(this.busqueda);

    }else{
      this.listaFacturas=this.servicioCarrito.buscarFacturasPorCajero(this.busqueda);
    }
  }
}
