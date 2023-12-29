const mongoose = require('mongoose');

require('dotenv').config();


const DB_NAME = process.env.DB_NAME
const DB_PASS = process.env.DB_PASS
const CONNECTION_URL =`mongodb+srv://pamelasoledadgon:nGijKQsylNQvDPeu@pamelasoledadgon.pqehfjs.mongodb.net/?retryWrites=true&w=majority`
//const CONNECTION_URL =`mongodb+srv://pamelasoledadgon:${DB_PASS}@pamelasoledadgon.pqehfjs.mongodb.net/tecnoCELL${DB_NAME}`

mongoose.connect(CONNECTION_URL, {
    //useNewUrlParser: true, 
  })
    .then(() => {
      console.log('Conexión exitosa en mongo db!');
    })
    .catch((err) => {
      console.error('Error al conectar a la base de datos:', err);
    });
  
