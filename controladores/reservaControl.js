const reserva = require('../modelos/reserva');

module.exports = class reservaControl {

    static async inserir(req, res) {
        const novaReserva = new reserva({
            placaCarro: req.body.placaCarro,
            cpfCliente: req.body.cpfCliente,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim
        });

        novaReserva.save(novaReserva).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao inserir informações da reserva ${novaReserva}` });
        })
    }
    
}