export interface SistemaOperativo{
    
    id?: number;
    createdAt?: number;
    updatedAt?: number;
    nombre:string;
    version:number;
    fecha:Date;
    peso_gb:number;
    instalado:boolean;
    arregloSOAplicaciones?: any[];
}