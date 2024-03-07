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

        novoCarro.save(novoCarro).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações do carro ${novoCarro}` });
        })
    }
    
    static async buscar(req, res) {
        carro.findOne({placa: req.body.placa})
        .then(data => {
            if (!data) {
                return res.status(404).json({'mensagem':`Reserva não encontrada com a placa ${req.body.placa}`});
             }
             
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao buscar informações do carro pela placa ${placa}` });
        })
    }
    
}