/**
 * Module dependencies
 */

// ...

/**
 * exam/record-exam-response.js
 *
 * Record exam response.
 */
module.exports = async function recordExamResponse(req, res) {
  const parameters = req.allParams()

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) await callback(array[index], index, array)
  }

  await asyncForEach(Object.values(parameters), async (element) => {

    const parameterSearch = {
      user_id: element.user_id,
      exam_id: element.exam_id,
      question_id: element.question_id
    }

    // Validar que el user_id existe en la BD
    const user = await User.findOne({ id: element.user_id })
    if (!user) return res.badRequest(`No existe el usuario con id : ${element.user_id}`)

    // Validar que el exam_id existe en la BD
    const exam = await Exam.findOne({ id: element.exam_id })
    if (!exam) return res.badRequest(`No existe el exam con id : ${element.exam_id}`)

    // Validar que el question_id existe en la BD
    const question = await Question.findOne({ id: element.question_id })
    if (!question) return res.badRequest(`No existe el question con id : ${element.question_id}`)

    // Validar que el answer_id existe en la BD
    const answer = await Answer.findOne({ id: element.answer_id })
    if (!answer) return res.badRequest(`No existe el answer con id : ${element.answer_id}`)


    const detailResultsSearch = await DetailResult.find(parameterSearch)

    if (detailResultsSearch.length !== 0) await DetailResult.update(parameterSearch, { answer_id: element.answer_id })
    else await DetailResult.create(element)

    await ExamAssigned.update({ exam_id: element.exam_id, user_id: element.user_id }, { exam_state_id: 3 })

  })

  res.ok('El Examen ha sido guardado exitosamente..!!')
}
