/**
 * Question.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'questions',

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    exam_id: {
      type: 'number',
      required: true
    }
  },

};

