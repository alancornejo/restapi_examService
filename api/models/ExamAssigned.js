/**
 * ExamAssigned.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'exams_assigneds',

  attributes: {
    exam_id: {
      type: 'number',
      required: true
    },

    user_id: {
      type: 'number',
      required: true
    },

    start_date: {
      type: 'string',
      required: true
    },

    expiration_date: {
      type: 'string',
      required: true
    },

    exam_state_id: {
      type: 'number',
      required: true
    }
  }
}

