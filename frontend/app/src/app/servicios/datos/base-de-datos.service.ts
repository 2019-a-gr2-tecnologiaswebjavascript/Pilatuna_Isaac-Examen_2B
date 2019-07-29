import { Injectable } from '@angular/core';
import { SistemaOperativo } from 'src/app/modelo/sistema-operativo';
import { Aplicacion } from 'src/app/modelo/aplicacion';
import { SistemaOperativoHttpService } from '../http/sistema-operativo-http.service';
import { AplicacionHttpService } from '../http/aplicacion-http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  listaSistemas:SistemaOperativo[]=[];
  listaAplicaciones:Aplicacion[]=[];
  constructor(
    private readonly _sistemaOperativoHttpService:SistemaOperativoHttpService,
    private readonly _aplicacionHttpService:AplicacionHttpService,
    
    ) { }

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
    const todosSistemas$ =this._sistemaOperativoHttpService
                          .obtenerTodos();
  
    todosSistemas$.subscribe(
      (sistemasObtenidos)=>{
        this.listaSistemas=sistemasObtenidos;
        console.log(sistemasObtenidos);
      },
      (error)=>{
        console.log(error);
      }
    );
    return this.listaSistemas;
  }

  agregarSistema(sistemaNuevo:SistemaOperativo){
    this.listaSistemas.push(sistemaNuevo);
    const sistemaCrear$ = this._sistemaOperativoHttpService
                            .crear(
                              {nombre:sistemaNuevo.nombre, 
                                version:sistemaNuevo.version,
                                fecha:sistemaNuevo.fecha,
                                peso_gb:sistemaNuevo.peso_gb,
                                instalado:sistemaNuevo.instalado
                            });

    sistemaCrear$.subscribe(
                  (nuevoSistema)=>{
                    console.log(nuevoSistema);
                  },
                  (error)=>{
                    console.log(error);
                  }
    );
    return this.listaSistemas;
  }

  eliminarSistema(idSistema:number):SistemaOperativo[]{
    this.listaSistemas.forEach(element => {
      if(element.id==idSistema){
        const indice=this.listaSistemas.indexOf(element);
        this.listaSistemas.splice(indice,1);
        this.borrarSistemaHTTP(idSistema);
      }
    });
    return this.listaSistemas;
  }

  borrarSistemaHTTP(idSistema){
    const sistemaBorrar$ = this._sistemaOperativoHttpService
    .eliminar(idSistema);

    sistemaBorrar$.subscribe(
    (sistemaBorrado)=>{
      console.log(sistemaBorrado);
    },
    (error)=>{
      console.log(error);
    }
    );
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
    var todasApps$ =this._aplicacionHttpService
                          .obtenerTodos();
    todasApps$.subscribe(
      (appsObtenidas)=>{
        this.listaAplicaciones=appsObtenidas;
        
      },
      (error)=>{
        console.log(error);
      },
      
    );
    return this.listaAplicaciones;

  }

  obtenerListaAplicaciones(idBusqueda:number):Aplicacion[]{
    var indices=[];
    this.obtenerTodasLasAplicaciones();
    this.listaAplicaciones.forEach(
      function(item,indice,array){
        if(item.fkSistemaOperativo==idBusqueda){
          indices.push(indice);
        }
      }
    );
    var listaSearch=indices.map(i => this.listaAplicaciones[i]);
  return listaSearch;
    
  }
  
  agregarAplicacion(aplicacionNueva:Aplicacion){
    
    const appCrear$ = this._aplicacionHttpService
                            .crear(
                              {nombre:aplicacionNueva.nombre, 
                                version:aplicacionNueva.version,
                                url:aplicacionNueva.url,
                                fecha:aplicacionNueva.fecha,
                                peso_gb:aplicacionNueva.peso_gb,
                                costo:aplicacionNueva.costo,
                                fkSistemaOperativo:aplicacionNueva.fkSistemaOperativo
                            });

    appCrear$.subscribe(
                  (aplicacionNueva)=>{
                    this.listaAplicaciones.push(aplicacionNueva);
                  },
                  (error)=>{
                    console.log(error);
                  }
    );
    
    return this.listaAplicaciones;
  }

  eliminarAplicacion(idAplicacion:number):Aplicacion[]{
    this.listaAplicaciones.forEach(element => {
      if(element.id==idAplicacion){
        const indice = this.listaAplicaciones.indexOf(element);
        this.listaAplicaciones.splice(indice,1);
        this.eliminarAplicacionHTTP(idAplicacion);
      }
    });
    return this.listaAplicaciones;
  }

  eliminarAplicacionHTTP(idAplicacion){
    const appBorrar$ = this._aplicacionHttpService
    .eliminar(idAplicacion);

    appBorrar$.subscribe(
    (aplicacionBorrada)=>{
      console.log(aplicacionBorrada);
    },
    (error)=>{
      console.log(error);
    }
    );

  }

  buscarAplicacion(busqueda:string,id:number):Aplicacion[]{
    var indices=[];
    console.log(this.listaAplicaciones)
    this.listaAplicaciones.forEach(
      function(item,indice,array){
        if(item.nombre.includes(busqueda)&&item.fkSistemaOperativo.id==id){
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
