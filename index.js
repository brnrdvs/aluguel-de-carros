const mongoose = require('mongoose');
const express = require('express');
const database = require('./configs/database');

database.mongoose.connect(database.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => {
        console.log('Conectado ao banco de dados');
    })
    .catch ((error) => {
        console.log('Erro na conexão ao banco de dados: ',error);
        process.exit();
    });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Bom dia');
});

var carroRota = require ('./rotas/carroRota');
app.use('/', carroRota);

const PORT='3000';
const HOST='127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Servidor executando na porta ${PORT}`);
})