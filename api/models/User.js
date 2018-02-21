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

    name_complet: {
      type: 'string',
      required: true
    },

    phone_number: {
      type: 'string',
      required: false
    },

    proyect_id: {
      required: true,
      model: 'proyect'
    }
  }
}
