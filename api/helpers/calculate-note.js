module.exports = {


  friendlyName: 'Calculate note',


  description: '',


  inputs: {
    data: {
      type: 'ref',
      example: '',
      description: 'Enviar json con 02 parametros principales questionsCount y correctQuestionsCount.',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const data = inputs.data

    const roundNumber = (number, max = 2) => {
      if (typeof number !== 'number' || isNaN(number)) throw new TypeError('Número inválido: ' + number)
      if (typeof max !== 'number' || isNaN(max)) throw new TypeError('Máximo de dígitos inválido: ' + max)

      let fractionalPart = number.toString().split('.')[1]
      if (!fractionalPart || fractionalPart.length <= 2) return number + '.00'
      return Number(number.toFixed(max))
    }

    data.forEach((element, index) => {
      // Iniciar calculo de la nota
      if (element.exam_state_id !== 3) data[index].note = '0.00'
      else {
        const questionsCount = (typeof (element.questions_count) !== 'undefined') ? element.questions_count : 0
        const correctQuestionsCount = (typeof (element.correct_questions_count) !== 'undefined') ? element.correct_questions_count : 0

        const valueOneQuestion = (questionsCount !== 0) ? (20 / questionsCount) : 0
        const noteForExamen = (correctQuestionsCount !== 0) ? roundNumber(valueOneQuestion * correctQuestionsCount, 2) : '0.00'
        data[index].note = noteForExamen
      }
      // Fin de calcular la nota

    })
    return exits.success(data)
  }

}

