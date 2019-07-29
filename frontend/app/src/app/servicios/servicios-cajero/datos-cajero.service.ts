import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosCajeroService {
  nombreCajero:string='';
  constructor() { }

  guardarNombreCajero(nombre:string){
    this.nombreCajero=nombre;
    this.guardarBase();
  }

  obtenerNombreCajero():string{
    //this.leerBase();
    return this.nombreCajero;
  }

  existeCajero():boolean{
    if(this.nombreCajero.length==0){
      return false;
    }else{
      return true;
    }
  }

  guardarBase(){
    const data={'nombreCajero':this.nombreCajero}
    localStorage.setItem('datosCajero', JSON.stringify(data));
  }

  leerBase(){
    var getObject = JSON.parse(localStorage.getItem('datosCajero'));
    if(getObject == null){
      this.nombreCajero=getObject['nombreCajero'];
    }else{
      this.nombreCajero='Indefinido';
    }
  }

}
