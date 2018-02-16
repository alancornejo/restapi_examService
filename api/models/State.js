/**
 * State.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'states',

  attributes: {
    name: {
      type: 'string',
      required: true
    }
  }
}
