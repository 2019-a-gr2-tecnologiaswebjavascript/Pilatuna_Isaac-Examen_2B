import { Injectable } from '@angular/core';
import { SistemaOperativo } from 'src/app/modelo/sistema-operativo';
import { HttpSailsPrincipal } from './http-sails-principal.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SistemaOperativoHttpService  extends HttpSailsPrincipal<SistemaOperativo>{

  constructor(private readonly _httpClient:HttpClient) { 
    super(_httpClient, environment.url, '/SistemaOperativo');
  }
}
