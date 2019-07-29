import { ItemCarrito } from './item-carrito';

export interface ItemCompra{

    nombreComprador:string;
    nombreCajero:string;
    identificacion:string;
    direccion:string;
    telefono:string;
    correo:string;
    total:number;
    carrito:ItemCarrito[];
}