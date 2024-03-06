const promocao = require('../modelos/promocao');

module.exports = class promocaoControl {

    static async inserir(req, res) {
        const novaPromocao = new promocao({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        });

        novaPromocao.save(novaPromocao).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações da promoção ${novaPromocao}` });
        })
    }
    
}