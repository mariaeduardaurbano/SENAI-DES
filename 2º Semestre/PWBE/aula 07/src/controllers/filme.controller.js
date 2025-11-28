const db = require("../data/connection");

const listarFilmes = async (req, res) => {
    const lista = await db.query("SELECT * FROM filme");
    res.json(lista[0]).end();
}

const buscarFilmes = async (req, res) => {
    const idFilme = req.params.id;
    const filme = await db.query("SELECT * FROM  filme WHERE id = " + idFilme);
    res.json(filme[0]).end();
}

    const cadastrarFilme = async (req, res) => {
    const {id, titulo, categoria, preco} = req.body;

    const novoFilme = await db.query("INSERT INTO  filme VALUES (?, ?, ?, ?)",[id, titulo, categoria, preco]);

    const filme = {
        id: id,
        titulo: titulo,
        categoria: categoria
    }
    res.json(filme).status(201).end();
};

const excluirFilme = async (req, res) => {
    const idFilme = req.params.id;

    try{
        const delFilme = await db.query("DELETE FROM filmes WHERE id = ?", [idFilme]);

        const info = {msg:""};

        if(delFilme[0].affectedRows === 1){
            info.msg = "Excluído com sucesso";
        }else if(delFilme[0].affectedRows === 0){
            info.msg = "Filme não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1451) {
            info.msg = "Filme em locação";
        }

        res.status(500).json(info).end();
    }
};

const atualizarFilme = async (req, res) => {
    const {id, titulo, categoria, preco} = req.body;

    try{
        const atualiza =  await db.query("UPDATE filmes SET titulo = ?, categoria = ?, preco = ? WHERE id = ? ", [titulo, categoria, preco, id]);

        const info = {msg: ""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum filme encontrado";
        }else if(atualiza[0].affectedRows === 1) {
            info.msg = "Filme atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

module.exports = {
    listarFilmes,
    buscarFilmes,
    cadastrarFilme,
    excluirFilme,
    atualizarFilme
}
