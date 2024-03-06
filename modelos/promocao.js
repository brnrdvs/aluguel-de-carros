const mongoose = require('mongoose');

const promocao = new mongoose.Schema({
    titulo: {
        type: String, 
        required: true
    },  
    descricao: {
        type: String, 
        required: true
    },
    dtValidade: {
        type: Date, 
        required: true
    }
}, { versionKey: false });

module.exports=mongoose.model('Promoção',promocao);