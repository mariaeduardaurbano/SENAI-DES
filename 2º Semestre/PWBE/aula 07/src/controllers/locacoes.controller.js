const db = require("../data/connection");

const listarLocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista[0]).end();
}

const buscarLocacoes = async (req, res) => {
    const idLocacao = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE id = " + idLocacao);
    res.json(locacao[0]).end();
}

const cadastrarLocacoes = async (req, res) => {
    const {id, cliente_id, filme_id, data_locacao, status, preco} = req.body;

    const novaLocacao = await db.query("INSERT INTO  locacoes VALUES (?, ?, ?, ?, ?, ?)",[id, cliente_id, filme_id, data_locacao, status, preco]);

    const locacao = {
        id: id,
        cliente_id: cliente_id,
        filme_id: filme_id,
        data_locacao: data_locacao,
        status: status,
        preco: preco
    }
    res.json(locacao).status(201).end();
};

const excluirLocacoes= async (req, res) => {
    const idLocacao = req.params.id;

    try{
        const delLocacao = await db.query("DELETE FROM locacoes WHERE id = ?", [idLocacao]);

        const info = {msg:""};

        if(delLocacao[0].affectedRows === 1){
            info.msg = "Excluído com sucesso";
        }else if(delLocacao[0].affectedRows === 0){
            info.msg = "Locação não encontrada";
        }

        res.status(200).json(info).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1451) {
            info.msg = "Locação em uso";
        }

        res.status(500).json(info).end();
    }
};

const atualizarLocacoes = async (req, res) => {
    const {id, cliente_id, filme_id, data_locacao, status, preco} = req.body;

    try{
        const atualiza =  await db.query("UPDATE locacoes SET cliente_id = ?, filme_id = ?, data_locacao = ?, status = ?, preco = ? WHERE id = ? ", [cliente_id, filme_id, data_locacao, status, preco, id]);

        const info = {msg: ""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhuma locação encontrada";
        }else if(atualiza[0].affectedRows === 1) {
            info.msg = "Locação atualizada com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

const listarLocacoesID= async (req, res) => {
    const cliente_id = req.params.id;

    try{
        const buscarLocacoes = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [cliente_id]);

        res.status(200).json(buscarLocacoes[0]).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1451) {
            info.msg = "Locação em uso";
        }

        res.status(500).json(info).end();
    }
};

const listarLocacoesStatus = async (req, res) => {
    const statuslocacao = req.params.status;
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista[0]).end();

     try {
        const listStatus = await db.query("SELECT * FROM locacoes WHERE status = ?", [statuslocacao]);

            
        res.status(200).json(listStatus[0]).end();
    } catch (error) {
        const info = {msg:""};

        if(error.errno === 1451) {
            info.msg = "Já está locado";
        }

        res.status(500).json(info).end
}
};
const faturamento = async (req, res) => {
    const preco = req.params.preco;

    try{
        const faturamentoLocacoes = await db.query("SELECT  SUM(preco) FROM locacoes");

        res.status(200).json(faturamentoLocacoes[0]).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1451) {
            info.msg = "Faturamento";
        }

        res.status(500).json(info).end();
    }
};

module.exports = {
    listarLocacoes,
    buscarLocacoes,
    cadastrarLocacoes,
    excluirLocacoes,
    atualizarLocacoes,
    listarLocacoesID,
    listarLocacoesStatus,
    faturamento
}
