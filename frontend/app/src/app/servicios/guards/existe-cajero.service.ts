import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DatosCajeroService } from '../servicios-cajero/datos-cajero.service';

@Injectable({
  providedIn: 'root'
})
export class ExisteCajeroService implements CanActivate {
  

  constructor(private readonly _router:Router, private datosCajero:DatosCajeroService) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):boolean {
      const estaLogeado = this.datosCajero.existeCajero();
      if(estaLogeado){
        console.log('Bienvenido');
        return true;
      } else {
        const url = ['/cajero','app'];
        this._router.navigate(url);
        console.log('No tiene permisos');
        return false;
      }
      
}
}
