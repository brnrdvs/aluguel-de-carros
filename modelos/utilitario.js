const mongoose = require('mongoose')

const utilitario = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Carro',
        required: true
    },
    numPassageiros: {
        type: Number, 
        required: true
    },
    tamBagageiro: {
        type: Number, 
        required: true
    },
    kmLitro: {
        type: Number, 
        required: true
    }
}, { versionKey: false } );

module.exports = mongoose.model('Utilitário', utilitario);