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

    static async atualizar(req, res) {
        const {id} = req.query;

        reserva.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).json({'mensagem':`Reserva não encontrada com ID ${id}`})
            }
            else res.send({ 'mensagem': `Reserva ID ${id} atualizada com sucesso`})

        }).catch(error =>{
            res.status(500).send({ mensagem: error.message || `Erro ao atualizar informações da reserva ID ${id}` });            
        })
    }
}