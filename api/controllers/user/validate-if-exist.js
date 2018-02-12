/**
 * Module dependencies
 */

// ...


/**
 * user/validate-if-exist.js
 *
 * Validate if exist.
 */
module.exports = async function validateIfExist(req, res) {
  let parameters = req.allParams()
  const username = parameters.username

  const user = await User.find({ username: username }).populate('proyect_id')
  console.log(user)

  if (user.length === 0) {
    parameters.proyect_id = 1
    const userCreate = await User.create(parameters).fetch()
    res.status(201)
    res.send(userCreate)
  } else {
    res.status(200)
    res.send(user)
  }
}
