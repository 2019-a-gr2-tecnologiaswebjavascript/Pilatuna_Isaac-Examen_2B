/**
 * Aplicacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    version:{
      type:'number'
    },
    url:{
      type:'string'
    },
    fecha:{
      type: 'string', 
      columnType: 'date' 
    },
    peso_gb:{
      type:'number'
    },
    costo:{
      type:'number'
    }, //Configuracion Hijo
    fkSistemaOperativo:{ //Nombre del campo FK
      model:'sistemaOperativo' //Modelo a relacionarse (papa)
    },
    
  },

};

