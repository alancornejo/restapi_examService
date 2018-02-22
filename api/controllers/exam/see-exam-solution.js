/**
 * Module dependencies
 */

// ...

/**
 * exam/see-exam-solution.js
 *
 * See exam solution.
 */

const moment = require('moment')
moment.locale('es')

module.exports = async function seeExamSolution(req, res) {

  const parameters = req.allParams()
  const examId = parameters.exam_id
  const userId = parameters.user_id

  // Validar que el examId existe en la BD
  const exam = await Exam.findOne({ id: examId })
  if (!exam) return res.badRequest(`No existe el exam con id : ${examId}`)

  // Validar que el examId existe en la BD
  const examAssigned = await ExamAssigned.findOne({ exam_id: examId, user_id: userId })
  if (!examAssigned) return res.badRequest(`No existe examn assigend con id : ${examId}, que se encuentre asignado al user : ${userId}`)

  const isAllowed = moment().isAfter(examAssigned.expiration_date)
  const expirationDate = moment(examAssigned.expiration_date).format('MMMM Do YYYY, hh:mm:ss a')
  let dataAnswers = {
    message: `La solucion del examen solo podra ser visto a partir de : ${expirationDate}`
  }

  if (isAllowed) {
    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) await callback(array[index], index, array)
    }

    const questions = await Question.find({ select: ['id', 'name'], where: { exam_id: examId } })
    dataAnswers = questions

    await asyncForEach(questions, async (question, index) => {
      const answers = await Answer.find({ select: ['id', 'name'], where: { question_id: question.id } })
      const answerRegister = await DetailResult.findOne({ question_id: question.id })
      const answerCorrect = await Answer.findOne({ question_id: question.id, correction_id: 1 })
      dataAnswers[index]['answer_register'] = (answerRegister) ? answerRegister['answer_id'] : 0
      dataAnswers[index]['answer_correct'] = (answerCorrect) ? answerCorrect['id'] : 0
      dataAnswers[index].options = answers
    })
  }

  res.ok(dataAnswers)
}
