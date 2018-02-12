module.exports = {


  friendlyName: 'Convert json',


  description: 'Convertir',


  inputs: {
    data: {
      type: 'ref',
      example: '',
      description: 'Ingresarrrrrrrrrr.',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const data = inputs.data.rows[0]
    const json = JSON.parse(JSON.stringify(data))
    return exits.success(json)
  }


}

