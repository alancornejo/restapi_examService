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

  const examId = req.param('id')

  // Validar que el exam_id existe en la BD
  const exam = await Exam.findOne({ id: examId })
  if (!exam) return res.badRequest(`No existe el exam con id : ${examId}`)

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

  res.ok(dataAnswers)
}
