/**
 * Module dependencies
 */

// ...


/**
 * user/update-proyect.js
 *
 * Update proyect.
 */
module.exports = async function updateProyect(req, res) {
  const userId = req.param('id')
  const parameters = req.allParams()
  const proyectId = parameters.proyect_id

  const user = await User.findOne({ id: userId })
  if (!user) return res.badRequest(`No existe el usuario con id : ${userId}`)

  const proyect = await Proyect.findOne({ id: proyectId })
  if (!proyect) return res.badRequest(`No existe el proyect con id : ${proyectId}`)

  const record = await User.update({ id: userId }, { proyect_id: proyectId }).fetch()
  res.status(204)
  res.send(record)
}
