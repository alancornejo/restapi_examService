/**
 * Module dependencies
 */

// ...


/**
 * user/authentication.js
 *
 * Authentication user.
 */
module.exports = async function authentication(req, res) {
  const parameters = req.allParams()
  const username = parameters.username

  const data = {
    status: true,
    data: {
      username: username,
      name_complet: 'Corporacion Sapia Test',
      phone_number: '9898989865'
    }
  }

  /*
  "code": "E_INVALID_CRITERIA",
  "details": "Could not use the provided `where` clause.  Could not filter by `id`: Does not match the declared data type of the corresponding attribute.  1 error validating value: \n • Specified value (a string: 'validateIfExist') doesn't match the expected type: 'number'",
  "message": "The server
  */
  res.ok(data)

}
