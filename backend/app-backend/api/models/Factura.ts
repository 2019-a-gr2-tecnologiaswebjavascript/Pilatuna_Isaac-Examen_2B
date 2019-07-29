/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreComprador:{
      type:'string'
    },
    nombreCajero:{
      type:'string'
    },
    identificacion:{
      type:'string'
    },
    direccion:{
      type:'string'
    },
    telefono:{
      type:'string'
    },
    correo:{
      type:'string'
    },
    total:{
      type:'string'
    }
  },

};

