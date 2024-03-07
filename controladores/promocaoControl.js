const promocao = require('../modelos/promocao');
const cliente = require('../modelos/cliente');

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

    static async enviarPromocao(req, res) {
        const { id } = req.query;

        const encontrarPromo = await promocao.findById(id);
        console.log(promocao); 

        const encontrarCliente = await cliente.find({});
        console.log(encontrarCliente);

        res.json({'clientes': encontrarCliente, 'promocao': encontrarPromo});
    }
    
}