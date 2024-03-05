const esportivo = require('../modelos/esportivo');
const carro = require('../modelos/carro');

module.exports = class esportControl {

    static async inserir(req, res) {
        console.log(req.body);

        const carroId = await carro.findOne({ placa: req.body.placa });
        
        if (!carroId) {
            return res.status(404).send({ mensagem: `Carro não encontrado com a placa ${req.body.placa}` });
        }

        const novoEsportivo = new esportivo({
            idCarro: carroId._id,
            tempo100km: req.body.tempo100km,
            melhorias: req.body.melhorias
        });

        novoEsportivo.save(novoEsportivo).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações do carro esportivo ${novoEsportivo}` });
        })
    }
    
}