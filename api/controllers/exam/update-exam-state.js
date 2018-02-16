/**
 * Module dependencies
 */

// ...


/**
 * exam/update-exam-state.js
 *
 * Update exam state.
 */
module.exports = async function updateExamState(req, res) {
  const parameters = req.allParams()
  const examId = parameters.exam_id
  const userId = parameters.user_id
  const examStateId = parameters.exam_state_id

  // Validar que el exam_id existe en la BD
  const exam = await Exam.findOne({ id: examId })
  if (!exam) return res.badRequest(`No existe el exam con id : ${examId}`)

  const user = await User.findOne({ id: userId })
  if (!user) return res.badRequest(`No existe el usuario con id : ${userId}`)

  const record = await ExamAssigned.update({ exam_id: examId, user_id: userId }, { exam_state_id: examStateId }).fetch()
  res.status(204)
  res.send(record)
}
