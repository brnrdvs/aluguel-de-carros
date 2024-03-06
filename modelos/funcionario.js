const mongoose = require('mongoose');

const funcionario = new mongoose.Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'pessoa',
        required: true
    },  
    salario: {
        type: Number, 
        required: true
    },  
    qtdAlugueis: {
        type: Number, 
        required: true
    },
    status: {
        type: Boolean, 
        required: true
    }
}, { versionKey: false });

module.exports=mongoose.model('Funcionario',funcionario);