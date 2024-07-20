const { response, request } = require ('express');
const { param } = require('../routes/usuarios');




const usuariosGet = (req = request, res = response) => {
  res.json({
    msg: 'get API - controller'
  });
}

const usuariosPut = (req = request, res = response) => {

  const {q, nombre = 'not name', apikey} = req.query

  res.json({
    msg: 'put API - controller',
    q,
    nombre,
    apikey
  });
}


const usuariosPost = (req = request, res = response) => {

  const {nombre, apellido} = req.body;

  res.json({
    msg: 'post API - controller',
    nombre,
    apellido
  });
}
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controller'
  });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}