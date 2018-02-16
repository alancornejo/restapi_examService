/**
 * Module dependencies
 */

// ...


/**
 * exam/list-exam-user.js
 *
 * List exam user.
 */
module.exports = async function listExamUser(req, res) {
  const userID = req.param('id')

  const user = await User.findOne({ id: userID })
  if (!user) return res.badRequest(`No existe usuario con id : ${userID}`)

  const exams = await Exam.getDatastore().sendNativeQuery('CALL sp_list_exam_user($1)', [userID])
  let json = await sails.helpers.convertJson(exams)
  json = await sails.helpers.calculateNote(json)
  res.ok(json)
}
