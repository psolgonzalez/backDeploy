const express = require('express');
const router = express.Router();
const Persona = require('../models/persona');


router.get('/', async (req, res) => {

  const personas = await Persona.find();
  res.json({
    personas: personas
  });

});

router.post('/crear', async (req, res) => {

  const { nombre, apellido, dni } = req.body;

  console.log(nombre, apellido, dni);

  const persona = new Persona({
    nombre: nombre,
    apellido: apellido,
    dni: dni
  });

  await Persona.create(persona);

  res.json({ 
    mensaje: 'Creamos un usuario'
  });
});



router.get('/buscar', async (req, res)=>{
  const { nombre } = req.query;
  console.log(` Buscamos Personas ${nombre}`);
  const personas  = await Persona.find({nombre:nombre })
  console.log(`La respuesta es ${personas}`);
  res.json({ personas: personas })

})

router.delete('/:id', (req, res) => {
  res.send('Eliminar un usuario');
});

router.put('/:id', (req, res) => {
  res.send('Actualizar un usuario');
});


module.exports = router;
