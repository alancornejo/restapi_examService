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
  if (!user) return res.badRequest(`No existe el usuario con username : ${username}`)

  if (user.length === 0) {
    // Setear por default el proyect_id con el valor 1
    parameters.proyect_id = 1
    let userCreate = await User.create(parameters).fetch()
    userCreate = await User.find({ username: userCreate.username }).populate('proyect_id')
    res.status(201)
    res.send(userCreate)
  } else  {
    const userUpdate = await User.update({ username: username }, parameters).fetch()
    res.ok(userUpdate)
  }
}
