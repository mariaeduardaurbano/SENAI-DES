DROP DATABASE IF EXISTS lojao;

CREATE DATABASE lojao;/*cria uma base de dados*/

USE lojao;

CREATE TABLE produto(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    preco FLOAT NOT NULL,
    descricao VARCHAR(150)
);

CREATE TABLE pedidos(
   id INTEGER AUTO_INCREMENT PRIMARY KEY,
    produto_id INTEGER,
    cliente VARCHAR(150),
    quantidade INTEGER,
    data DATETIME,
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

INSERT INTO produto (preco, nome, descricao)
VALUES (10.50, "Maquiaji", "Qualidade Galantida"); 

SELECT * FROM produto;

SELECT nome, preco FROM produto;

INSERT INTO produto
VALUES(DEFAULT, "Base", 6.99, "De confianssa");

SELECT * FROM produto WHERE id = 1; /*Busca os registros com id igual a 1*/

INSERT into pedidos
VALUES
(DEFAULT, 1, "Fulana", 2, "2025-08-20"),
(DEFAULT, 2, "Fulana", 1, "2025-08-20"),
(DEFAULT, 2, "Beltrana", 5, "2025-08-23");

SELECT * FROM pedidos; 

SELECT * FROM pedidos WHERE produto_id = 1; 

SELECT * FROM pedidos WHERE cliente = "Fulana"; 

SELECT * FROM pedidos WHERE data = "2025-08-23"; 

/*Atualiza os registros da tabela*/
UPDATE pedidos
SET quantidade = 2
WHERE id = 2;

DELETE FROM pedido WHERE id = 3;/*Apaga um registro da tabela*/