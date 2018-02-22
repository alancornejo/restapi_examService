/**
 * Module dependencies
 */

// ...


/**
 * exam/update-exam-state.js
 *
 * Update exam state.
 */

const moment = require('moment')
moment.locale('es')

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


  const examAssigned = await ExamAssigned.findOne({ exam_id: examId, user_id: userId })
  if (!examAssigned) return res.badRequest(`No existe examn assigend con id : ${examId}, que se encuentre asignado al user : ${userId}`)

  const isAllowed = moment().isAfter(examAssigned.start_date)
  const expirationStart = moment(examAssigned.expiration_date).format('MMMM Do YYYY, hh:mm:ss a')
  let dataAnswers = {
    message: `El examen asignado se debera rendir a partir del ${expirationStart}`
  }

  if (isAllowed) {
    const record = await ExamAssigned.update({ exam_id: examId, user_id: userId }, { exam_state_id: examStateId }).fetch()
    res.status(204)
    res.send(record)
  } else {
    res.status(200)
    res.send(dataAnswers)
  }
}
