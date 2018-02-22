/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /proyect/state/:id': 'proyect/state',
  'GET /exam/takeExam/:id': 'exam/take-exam',
  'GET /exam/listExamUser/:id' : 'exam/list-exam-user',
  'POST /exam/seeExamSolution': 'exam/see-exam-solution',
  'POST /exam/recordExamResponse': 'exam/record-exam-response',
  'PATCH /exam/updateExamState': 'exam/update-exam-state',
  'POST /user/validateIfExist': 'user/validate-if-exist',
  'PATCH /user/updateProyect/:id': 'user/update-proyect'
}
