import { SistemaOperativo } from './sistema-operativo';

export interface Aplicacion{
    
    id?: number;
    createdAt?: number;
    updatedAt?: number;
    nombre:string;
    version:number;
    url:string;
    fecha:Date;
    peso_gb:number;
    costo:number;
    fkSistemaOperativo?: number | SistemaOperativo | any;
}