import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Factura } from 'src/app/modelo/factura';
import { HttpSailsPrincipal } from './http-sails-principal.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaHttpService extends HttpSailsPrincipal<Factura>{

  constructor(private readonly _httpClient:HttpClient) { 
    super(_httpClient, environment.url, '/Factura');
  }
}
