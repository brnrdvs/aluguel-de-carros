const pessoa = require('../modelos/pessoa');

module.exports = class pessoaControl {

    static async inserir(req, res) {
        const novaPessoa = new pessoa({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco
        });

        novaPessoa.save(novaPessoa).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações da pessoa ${novaPessoa}` });
        })
    }
    
}