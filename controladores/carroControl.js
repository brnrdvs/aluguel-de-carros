const carro = require('../modelos/carro');

module.exports = class carroControl {

    static async inserir(req, res) {
        const novoCarro = new carro({
            placa: req.body.placa,
            modelo: req.body.modelo,
            ano: req.body.ano,
            tipo: req.body.tipo,
            quilometragem: req.body.quilometragem,
            diaria: req.body.diaria,
            observacao: req.body.observacao
        });

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações do carro ${carro}` });
        })
    }
    
}