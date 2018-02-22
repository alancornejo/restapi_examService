/**
 * Module dependencies
 */

// ...


/**
 * exam/take-exam.js
 *
 * Take exam.
 */

const moment = require('moment')
moment.locale('es')

module.exports = async function takeExam(req, res) {

  const parameters = req.allParams()
  const examId = parameters.exam_id
  const userId = parameters.user_id

  // Validar que el exam_id existe en la BD
  const exam = await Exam.findOne({ id: examId })
  if (!exam) return res.badRequest(`No existe el exam con id : ${examId}`)

  const examAssigned = await ExamAssigned.findOne({ exam_id: examId, user_id: userId })
  if (!examAssigned) return res.badRequest(`No existe examn assigend con id : ${examId}, que se encuentre asignado al user : ${userId}`)

  const isAllowed = moment().isAfter(examAssigned.start_date)
  const expirationStart = moment(examAssigned.expiration_date).format('MMMM Do YYYY, hh:mm:ss a')
  let dataAnswers = {
    message: `El examen asignado se debera rendir a partir del ${expirationStart}`
  }

  if (isAllowed) {
    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) await callback(array[index], index, array)
    }

    let dataAnswers = {}
    const questions = await Question.find({ select: ['id', 'name', 'name_image'], where: { exam_id: examId } })
    dataAnswers = questions
    await asyncForEach(questions, async (question, index) => {
      const answers = await Answer.find({ select: ['id', 'name'], where: { question_id: question.id } })
      dataAnswers[index].options = answers
    })
  }


  res.ok(dataAnswers)

}
