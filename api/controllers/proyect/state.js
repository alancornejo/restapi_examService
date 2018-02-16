/**
 * Module dependencies
 */

// ...


/**
 * proyect/state.js
 *
 * State Proyect.
 */
module.exports = async function id(req, res) {
  const stateId = req.param('id')
  let state = await State.findOne({ id: stateId })
  if (!state) return res.badRequest(`No existe el state con id : ${stateId}`)
  const proyect = await Proyect.find({ select: ['id', 'name', 'sede'], where: { state_id: stateId } })
  res.ok(proyect)
}
