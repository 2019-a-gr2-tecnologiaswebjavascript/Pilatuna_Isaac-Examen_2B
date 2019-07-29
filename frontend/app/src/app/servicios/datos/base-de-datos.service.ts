import { Injectable } from '@angular/core';
import { SistemaOperativo } from 'src/app/modelo/sistema-operativo';
import { Aplicacion } from 'src/app/modelo/aplicacion';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  listaSistemas:SistemaOperativo[]=[];
  listaAplicaciones:Aplicacion[]=[];
  constructor() { }

  guardarBase(){
    const data={'listaSistemas':this.listaSistemas,'listaAplicaciones':this.listaAplicaciones}
    localStorage.setItem('dataSistemasYApps', JSON.stringify(data));
  }

  leerBase(){
    var getObject = JSON.parse(localStorage.getItem('dataSistemasYApps'));
    this.listaSistemas=getObject['listaSistemas'];
    this.listaAplicaciones=getObject['listaAplicaciones'];
  }

  obtenerListaSistemas():SistemaOperativo[]{
    return this.listaSistemas;
  }

  agregarSistema(sistemaNuevo:SistemaOperativo){
    this.listaSistemas.push(sistemaNuevo);
    console.log(this.listaSistemas);
    this.guardarBase();
    return this.listaSistemas;
  }

  eliminarSistema(idSistema:number):SistemaOperativo[]{
    this.listaSistemas.forEach(
      function(item,indice,array){
        if(item.id==idSistema){
          array.splice(indice,1);
        }
      }
    );
    this.guardarBase();
    return this.listaSistemas;
  }
  
  buscarSistema(busqueda:string):SistemaOperativo[]{
    var indices=[];
    this.listaSistemas.forEach(
      function(item,indice,array){
        if(item.nombre.includes(busqueda)){
          indices.push(indice);
        }
      }
    );
    var listaSearch=indices.map(i => this.listaSistemas[i]);
    return listaSearch;

  }

  obtenerTodasLasAplicaciones():Aplicacion[]{
    return this.listaAplicaciones;

  }

  obtenerListaAplicaciones(idBusqueda:number):Aplicacion[]{
    var indices=[];
    this.listaAplicaciones.forEach(
      function(item,indice,array){
        if(item.sistemaOperativoId==idBusqueda){
          indices.push(indice);
        }
      }
    );
    var listaSearch=indices.map(i => this.listaAplicaciones[i]);
    return listaSearch;
  }
  agregarAplicacion(aplicacionNueva:Aplicacion){
    this.listaAplicaciones.push(aplicacionNueva);
    this.guardarBase();
    console.log(this.listaAplicaciones);
    
    return this.listaAplicaciones;
  }

  eliminarAplicacion(idAplicacion:number):Aplicacion[]{
    this.listaAplicaciones.forEach(
      function(item,indice,array){
        if(item.id==idAplicacion){
          array.splice(indice,1);
        }
      }
    );
    this.guardarBase();
    return this.listaAplicaciones;
  }

  buscarAplicacion(busqueda:string,id:number):Aplicacion[]{
    var indices=[];
    this.listaAplicaciones.forEach(
      function(item,indice,array){
        if(item.nombre.includes(busqueda)&&item.sistemaOperativoId==id){
          indices.push(indice);
        }
      }
    );
    var listaSearch=indices.map(i => this.listaAplicaciones[i]);
    return listaSearch;

  }
  iniciarServicio(){
    console.log('Base Iniciada');
    this.leerBase();
  }
}
