"use strict";

/**
 * Blender
 * @description :: Model for storing Blender records
 */

module.exports = {
  schema: true,

  attributes: {
    name : {
      type: 'string',
      required: true,
      unique: true
    },

    speed : {
      type: 'integer',
      required: true,
    },

    owner : {
      model : "user"
    },
    // Fill your attributes here

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
