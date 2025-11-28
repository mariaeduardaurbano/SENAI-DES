const reservas = require("../data/reservas.data");

const listar = (req, res) => {
    res.status(200).send(reservas).end();
};

const buscar =(req, res) => {

    const idReserva = req.params.id;
   
    var reserv = "não encontrado";

    
    reservas.forEach((reserva, index) => {
        if(reserva.id === idReserva){
            reserv = reservas;
        }
    });

    res.send(reserv).end();
};

const cadastrar = (req, res) =>{
    const novaReserva = req.body; 
    quartos.push(novaReserva);
    res.status(201).send("Cadastrado com Sucesso!").end();
};

const apagar = (req, res) => {

    const idReserva = req.params.id;

    var indice = -1;

    reservas.forEach((reservas, index) => {
        if(reservas.id == idReserva){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        reservas.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const reservaAlterada = req.body;

    var encontrei = false;

    reservas.forEach((reserva, index) => {
        if(reserva.id === reservaAlterada.id){
            reservas[index] = reservaAlterada;
            encontrei = true;
        }
    });

    if(encontrei === false){
        res.status(404).end();
    }else{
        res.status(201).end();
    }
};

const atualizar = (req, res) =>{
    const idReserva = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    reservas.forEach((reservas, index) => {
        if(reservas.id === idReserva) indice = index;
    });

    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(novosDados).forEach((key) => {
            reservas[indice][key] = novosDados[key];
    });
    res.status(204).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    alterar,
    atualizar
};