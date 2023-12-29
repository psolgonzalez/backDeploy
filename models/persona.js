
const mongoose = require('mongoose');
const { Schema } =  require('mongoose');

const userSchema = new Schema({
    nombre:{
        type: 'string',
        required: true,
    },
    apellido:{
        type: 'string',
        required: true,
    },
    dni: {
        type: 'number',
        required: true,
    },
    timestamp: {
        type: 'Date',
        default: Date.now()
    }
});


const Personal = mongoose.model('User', userSchema);

module.exports = Personal;
