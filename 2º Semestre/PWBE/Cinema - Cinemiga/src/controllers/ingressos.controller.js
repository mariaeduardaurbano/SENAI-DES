const db = require("../data/connection");

const CadastrarIngresso = async (req, res) => {
    const {nome, data, filme} = req.body;
    
    try {
        const novoIngresso = await db.query("INSERT INTO ingressos VALUES (DEFAULT,?,?,?)", [nome, data, filme]);
        const ingresso = {
        id: novoIngresso[0].insertId,
        nome: nome,
        data: data,
        filme: filme
    }
    res.json(ingresso).status(202).end();
    } catch(error){
        console.log(error);
        res.statua(500).end();
    }
};

const ListarIngresso = async (req, res) => {
    
    try {
    const lista = await db.query("SELECT * FROM ingressos");
    res.json(lista[0]).end();

    }catch(error) {
        console.log(error);
        res.status(500).end();
    }
};


const BuscarIngresso = async (req, res) => {
    const idCliente = req.params.id;

    try {
    const ingresso = await db.query("SELECT * FROM ingressos WHERE id = " + idIngresso);
    res.json(ingresso[0][0]).end;
} catch(error) {
        console.log(error);
        res.status(500).end();
    }
};


const AtualizarIngresso = async (req,res) => {
    const {nome, data, filme} = req.body;

    try {
        const atuliza = await db.query("UPDATE ingressos SET nome = ?, data = ?, filme = ? WHERE id = ?", [nome, data, filme]);
        const info = {msg: ""};

        if(atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum ingresso encontrado";
        }
        else if(atuliza[0].affectedRows === 1) {
            info.msg = "Ingresso atualizado com sucesso";
        } 

        res.status(200).json(info).end();

    } catch(error) {
        console.log(error);
        res.status(500).end();
    }
};

const AlterarIngresso = (req, res) => {
    const IngressoAlterado = req.body;

    try {
        var encontrei = false;

    ingressos.forEach((ingresso, index) => {
        if(ingresso.id === IngressoAlterado.id) {
            ingressos[index] = IngressoAlterado;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404).end();
    }
    else {
        res.status(201).end();
    }
} catch(error) {
        console.log(error);
        res.status(500).end();
    }
};

const ExcluirIngresso = async (req, res) => {
    const idIngresso = req.params.id;

    try {
        const apagarIngresso = await db.query ("DELETE FROM ingressos WHERE id = ?", [idIngresso]);
        const info = {msg:""};

        if (apagarIngresso[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }
        
        else if (apagarIngresso[0].affectedRows === 0) {
            info.msg = "Ingresso não encontrado";
        }

        res.status(200).json(info).end();

    } catch(error) {
        const info = {msg: ""};
        
        if (error.errno === 1451) {
            info.msg = "Ingresso com locaçãõ";
        }

        res.status(500).json(info).end();
    }
};

module.exports = {
    CadastrarIngresso,
    ListarIngresso,
    BuscarIngresso,
    AtualizarIngresso,
    AlterarIngresso,
    ExcluirIngresso 
};