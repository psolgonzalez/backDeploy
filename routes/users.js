const express = require('express');
const router = express.Router();
const Personal = require('../models/personal');

/* GET users listing. */
router.get('/', async (req, res) => {

  const personal = await Personal.find();
  res.json({
    personal: personal
  });

});

router.post('/crear', async (req, res) => {

  const { nombre, apellido, dni } = req.body;

  console.log(nombre, apellido, dni);

  const personal = new Personal({
    nombre: nombre,
    apellido: apellido,
    dni: dni
  });

  await Personal.create(personal);

  res.json({ 
    mensaje: 'Creamos un usuario'
  });
});

router.delete('/:id', (req, res) => {
  res.send('Eliminamos un usuario');
});

router.put('/:id', (req, res) => {
  res.send('Actualizamos un usuario');
});


module.exports = router;
