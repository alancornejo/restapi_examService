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
  const parameters = req.allParams()
  const proyectId = parameters.proyect_id

  const userID = req.param('id')
  const user = await User.findOne({ id: userID })
  if (!user) res.json(412, { message: 'No existe usuario con id : ' + userID })

  const proyect = await Proyect.findOne({ id: proyectId })
  if (!proyect) res.json(412, { message: 'No existe el proyect con id : ' + proyectId })

  const record = await User.update({ id: userID }, { proyect_id: proyectId }).fetch()
  res.status(204)
  res.send(record)
}
