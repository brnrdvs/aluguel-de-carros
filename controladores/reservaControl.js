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
    
    static async buscar(req, res) {
        reserva.findOne({cpfCliente: req.body.cpfCliente})
        .then(data => {
            if (!data) {
                return res.status(404).json({'mensagem':`Reserva não encontrada com o CPF ${req.body.cpfCliente}`});
             }

            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao buscar informações da reserva pelo CPF ${cpfCliente}` });
        })
    }       
}