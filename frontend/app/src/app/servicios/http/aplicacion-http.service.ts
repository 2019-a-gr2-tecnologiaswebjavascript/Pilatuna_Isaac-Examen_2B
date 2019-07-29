import { Injectable } from '@angular/core';
import { Aplicacion } from 'src/app/modelo/aplicacion';
import { HttpSailsPrincipal } from './http-sails-principal.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SistemaOperativo } from 'src/app/modelo/sistema-operativo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AplicacionHttpService  extends HttpSailsPrincipal<Aplicacion>{

  constructor(private readonly _httpClient:HttpClient) { 
    super(_httpClient, environment.url, '/Aplicacion');
  }

  obtenerAplicacionesPorID():Observable<Aplicacion[]>{
    const url = `${this.url}${this.modelo}`;
    return this.httpClient
                .get(url)
                .pipe(
                    map(
                        (datos)=>{
                            return datos as Aplicacion[];
                    })
                );
  }
}