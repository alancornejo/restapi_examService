/**
 * Exam.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'exams',

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    duration: {
      type: 'string',
      required: true
    },

    proyect_id: {
      type: 'number',
      required: true
    }
  }
};

