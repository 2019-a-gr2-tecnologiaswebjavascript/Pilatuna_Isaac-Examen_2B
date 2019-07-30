import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCajeroService } from '../servicios/servicios-cajero/datos-cajero.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.page.html',
  styleUrls: ['./autenticacion.page.scss'],
})
export class AutenticacionPage implements OnInit {
  nombreCajero='';

  constructor(private router:Router, private readonly datosCajeroService:DatosCajeroService) { }

  ngOnInit() {
    this.nombreCajero=this.datosCajeroService.obtenerNombreCajero();
  }

  iniciarSesion(){
    this.datosCajeroService.guardarNombreCajero(this.nombreCajero);
    this.router.navigateByUrl("/tabs/tab1");
  }

}
