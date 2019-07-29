import { Injectable } from '@angular/core';
import { Factura } from 'src/app/modelo/factura';
import { FacturaHttpService } from '../http/factura-http.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  totalVentas:Factura[] = [];
  constructor(private readonly _facturaHttpService:FacturaHttpService) { }

  agregarVenta(itemCompra:Factura){
    
    this.totalVentas.push(itemCompra);
    const facturaCrear$ = this._facturaHttpService
                            .crear(
                              {nombreComprador:itemCompra.nombreComprador, 
                                nombreCajero:itemCompra.nombreCajero,
                                identificacion:itemCompra.identificacion,
                                direccion:itemCompra.direccion, 
                                telefono:itemCompra.telefono,
                                correo:itemCompra.correo,
                                total:itemCompra.total
                            });

    facturaCrear$.subscribe(
                  (facturaCreada)=>{
                    console.log(facturaCreada)
                  },
                  (error)=>{
                    console.log(error);
                  }
    );
    this.guardarBase();

  }

  iniciarServicio(){

    this.leerBase();
  }

  obtenerFacturas():Factura[]{
    var todasFacturas$ =this._facturaHttpService
                          .obtenerTodos();
    todasFacturas$.subscribe(
      (facturasObtenidas)=>{
        this.totalVentas=facturasObtenidas;
        
      },
      (error)=>{
        console.log(error);
      },
      
    );
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
