const funcionario = require('../modelos/funcionario');
const pessoa = require('../modelos/pessoa');

module.exports = class funcionarioControl {

    static async inserir(req, res) {
        const pessoaId = await pessoa.findOne({ cpf: req.body.cpf });
        
        if (!pessoaId) {
            return res.status(404).send({ mensagem: `Pessoa não encontrada com o CPF ${req.body.cpf}` });
        }

        const novoFuncionario = new funcionario({
            idPessoa: pessoaId._id,
            salario: req.body.salario,
            qtdAlugueis: req.body.qtdAlugueis,
            status: req.body.status
        });

        novoFuncionario.save(novoFuncionario).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações do funcionário ${novoFuncionario}` });
        })
    }
    
}