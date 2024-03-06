const cliente = require('../modelos/cliente');
const pessoa = require('../modelos/pessoa');

module.exports = class clienteControl {

    static async inserir(req, res) {
        const pessoaId = await pessoa.findOne({ cpf: req.body.cpf });
        
        if (!pessoaId) {
            return res.status(404).send({ mensagem: `Pessoa não encontrada com o CPF ${req.body.cpf}` });
        }

        const novoCliente = new cliente({
            idPessoa: pessoaId._id,
            cartMotorista: req.body.cartMotorista,
            anoVencCarteira: req.body.anoVencCarteira,
            fotoCarteira: req.body.fotoCarteira
        });

        novoCliente.save(novoCliente).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações do cliente ${novoCliente}` });
        })
    }
    
}