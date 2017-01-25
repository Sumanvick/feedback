/**
 * Ratingform.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    formTitle : {
      required : true,
      type : "string"
    },
    submitFor : {
      required : true,
      type : "integer"
    },
    rating : {
      required : true,
      type : "integer"
    },
    comment : {
      required : true,
      type : "string"
    }
  }
};

