const validaGerente = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if (cargo === "GERENTE") {
        next();
    }else{
        res.status(401).send("Sem nível de acesso");
    }
};

const validaSupervisor = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if (cargo === "SUPERVISOR") {
        next();
    }else{
        res.status(401).send("Sem nível de acesso");
    }
};

module.exports = {
    validaGerente,
    validaSupervisor
}