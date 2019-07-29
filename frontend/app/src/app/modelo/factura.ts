import { ItemCarrito } from './item-carrito';

export interface Factura{
    
    id?: number;
    createdAt?: number;
    updatedAt?: number;
    nombreComprador:string;
    nombreCajero:string;
    identificacion:string;
    direccion:string;
    telefono:string;
    correo:string;
    total:number;
    carrito?:ItemCarrito[];
}