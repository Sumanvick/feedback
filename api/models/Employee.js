/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name : {
      required : true,
      type : "string"
    },
    age : {
      required : true,
      type : "integer"
    },
    designation : {
      required : true,
      type : "string"
    }
  }
};
