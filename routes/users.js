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

router.delete('/:id',async(req, res) => {
  const{id}= req.params
  try{
    const deleteById = await Persona.findByIdAndDelete({_id:id})
    console.log('Persona eliminada:', deleteById);
    res.json({mensaje:'Persona eliminada correctamente'});
  }catch (error){  
  console.error(error) 
  console.error('Error al eliminar tu persona');
  res.json ({mensaje:'error al eliminar tu persona'})
  }
});

router.put('/:id', (req, res) => {
  res.send('Actualizar un usuario');
});


module.exports = router;
