module.exports = {


  friendlyName: 'Convert segund to hour time',


  description: 'Return the seconds individually in hh:mm',


  inputs: {
    seg: {
      type: 'number',
      example: 300,
      description: 'The number of seconds to convert.',
      required: true
    }
  },


  exits: {

  },

  fn: async function (inputs, exits) {

    const timeBox = { seg: inputs.seg }
    let result = ''

    const extractQuotientResidue = (limit, valor) => {
      if (timeBox['seg'] >= limit) {
        timeBox[valor] = (timeBox['seg'] / limit).toString().split('.')[0]
        timeBox['seg'] = timeBox['seg'] - (timeBox[valor] * limit)
      }
    }

    extractQuotientResidue(3600, 'hrs')   // Extrayendo el cociente para las horas
    extractQuotientResidue(60, 'min')     // Extrayendo el cociente para las minutos

    result = (timeBox.hrs) ? result.concat(timeBox.hrs, 'hrs ') : result.concat('')
    result = (timeBox.min) ? result.concat(timeBox.min, 'min ') : result.concat('')
    result = (timeBox.seg) ? result.concat(timeBox.seg, 'seg ') : result.concat('')
    return exits.success(result)
  }
}

