/**
 * SistemaOperativo.js
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
    fecha:{
      type: 'string', 
      columnType: 'date' 
    },
    peso_gb:{
      type:'number'
    },
    instalado:{
      type:'boolean'
    }, //Configuracion Papa
    arregloSOAplicaciones:{ //nombre de los hijos
      collection: 'aplicacion', //modelo a ser relacionado (hijo)
      via:'fkSistemaOperativo' //nombre de atributo FK (hijo)
    }
  },

};

