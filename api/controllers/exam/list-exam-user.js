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
  if (!user) res.json(412, { message: 'No existe usuario con id : ' + userID })

  const exams = await Exam.getDatastore().sendNativeQuery('CALL sp_list_exams($1)', [userID])
  let json = await sails.helpers.convertJson(exams)
  res.ok(json)
}
