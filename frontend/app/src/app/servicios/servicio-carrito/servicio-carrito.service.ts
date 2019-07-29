import { Injectable } from '@angular/core';
import { ItemCompra } from 'src/app/modelo/item-compra';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  totalVentas:ItemCompra[] = [];
  constructor() { }

  agregarVenta(itemCompra:ItemCompra){
    
    this.totalVentas.push(itemCompra);
    this.guardarBase();

  }

  iniciarServicio(){
    this.leerBase();
  }

  obtenerFacturas():ItemCompra[]{
    return this.totalVentas;
  }
  guardarBase(){
    const data={'listaFacturas':this.totalVentas}
    localStorage.setItem('dataFacturas', JSON.stringify(data));
  }
  leerBase(){
    var getObject = JSON.parse(localStorage.getItem('dataFacturas'));
    this.totalVentas=getObject['listaFacturas'];
  }

  buscarFacturas(nombre:string){
    var indices=[];
    this.totalVentas.forEach(
      function(item,index,array){
        if(item.nombreComprador.includes(nombre)){
          indices.push(index);
        }
      }
    );
    
    var listaSearch=indices.map(i => this.totalVentas[i]);
    return listaSearch;
  }
  buscarFacturasPorCajero(nombre:string){
    var indices=[];
    this.totalVentas.forEach(
      function(item,index,array){
        if(item.nombreCajero.includes(nombre)){
          indices.push(index);
        }
      }
    );
    
    var listaSearch=indices.map(i => this.totalVentas[i]);
    return listaSearch;
  }
}
