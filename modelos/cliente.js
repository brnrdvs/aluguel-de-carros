const mongoose = require('mongoose');

const cliente = new mongoose.Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'pessoa',
        required: true
    },  
    cartMotorista: {
        type: Number, 
        required: true
    },  
    anoVencCarteira: {
        type: Number, 
        required: true
    },
    fotoCarteira: {
        //data: Buffer, 
        //contentType: String,
        type: Number,
        required: false
    }
}, { versionKey: false });

module.exports=mongoose.model('Cliente',cliente);