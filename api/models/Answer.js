/**
 * Answers.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'answers',

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    question_id: {
      type: 'number',
      required: true
    },

    correction_id: {
      type: 'number',
      required: true
    }
  }
}

