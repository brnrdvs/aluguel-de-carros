const mongoose = require('mongoose')

const esportivo = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'carro',
        required: true
    },
    tempo100km: {
        type: Number, 
        required: true
    },
    melhorias: {
        type: [String], 
        required: false
    }
}, { versionKey: false } );

module.exports = mongoose.model('Esportivo', esportivo);