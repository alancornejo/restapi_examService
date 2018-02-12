/**
 * Module dependencies
 */

// ...


/**
 * exam/take-exam.js
 *
 * Take exam.
 */
module.exports = async function takeExam(req, res) {

  const examID = req.param('id')
  const exams = await Exam.findOne({ id: examID })
  if (!exams) return res.json(412, { message: 'No existe examen con id : ' + examID })

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) await callback(array[index], index, array)
  }

  let dataAnswers = {}
  const questions = await Question.find({ select: ['id', 'name'], where: { exam_id: examID } })
  dataAnswers = questions
  await asyncForEach(questions, async (question, index) => {
    const answers = await Answer.find({ select: ['id', 'name'], where: { question_id: question.id } })
    dataAnswers[index].options = answers
  })

  res.ok(dataAnswers)

}
