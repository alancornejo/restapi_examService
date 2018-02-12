/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',

  attributes: {
    username: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string',
      required: true
    },

    phone_number: {
      type: 'string',
      required: true
    },

    proyect_id: {
      type: 'number',
      required: true
    }
  }
}
