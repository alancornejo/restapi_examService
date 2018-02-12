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
  const id = req.param('id')
  const values = ['1', '2']
  if (!values.includes(id)) res.json(412, { message: 'El parametro enviado no corresponde. 1 es para Activo y 2 para inactivo ' })

  Proyect.find({ select: ['id', 'name', 'sede'], where: { state_id: id } })
    .then(record => res.ok(record))
    .catch(err => res.serverError(err))
}
