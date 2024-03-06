const mongoose = require('mongoose');

const reserva = new mongoose.Schema({
    cpfCliente: {
        type: String, 
        ref: 'pessoa',
        required: true
    },  
    placaCarro: {
        type: String, 
        ref: 'carro',
        required: true
    },
    status: {
        type: Boolean, 
        required: true
    },    
    dtInicio: {
        type: Date, 
        required: true
    },
    dtFim: {
        type: Date, 
        required: true
    }
}, { versionKey: false });

module.exports=mongoose.model('Reserva',reserva);