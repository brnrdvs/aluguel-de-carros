const utilitario = require('../modelos/utilitario');
const carro = require('../modelos/carro');

module.exports = class utilControl {

    static async inserir(req, res) {
        const carroId = await carro.findOne({ placa: req.body.placa });

        const novoUtilitario = new utilitario({
            idCarro: carroId._id,
            numPassageiros: req.body.numPassageiros,
            tamBagageiro: req.body.tamBagageiro,
            kmLitro: req.body.kmLitro
        });

        novoUtilitario.save(novoUtilitario).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações do carro utilitário ${novoUtilitario}` });
        })
    }
    
}