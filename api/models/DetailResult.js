/**
 * DetailResults.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'detail_results',

  attributes: {
    user_id: {
      type: 'number',
      required: true
    },

    exam_id: {
      type: 'number',
      required: true
    },

    question_id: {
      type: 'number',
      required: true
    },

    answer_id: {
      type: 'number',
      required: true
    }
  }
};

