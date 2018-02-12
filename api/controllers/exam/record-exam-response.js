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

  console.log('Entrooooooooo')
  console.log('req.method')
  console.log(req.method)

  console.log('req.param()')
  console.log(req.param())

  console.log('req.allParams()')
  console.log(req.allParams())

  sails.log.debug('TODO: implement')
  return res.ok()

}
