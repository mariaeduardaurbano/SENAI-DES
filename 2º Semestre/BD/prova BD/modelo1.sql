DROP DATABASE IF EXISTS lojanova;
CREATE DATABASE lojanova; 


USE  lojanova;


use lojanova; 

CREATE TABLE clientes(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);


CREATE TABLE pedidos(
   id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cliente_id INTEGER,
    data_pedido DATETIME,
    status VARCHAR(20),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);


INSERT INTO clientes (id, nome, email)
VALUES(123, "Maria Eduarda Urbano", "m.urbano@gmail.com");

INSERT INTO clientes (id, nome, email)
VALUES(456, "Mirella Brolezi", "m.brolezi@gmail.com");

INSERT INTO clientes (id, nome, email)
VALUES(789, "Gabrielly Souza", "g.souza@gmail.com");



INSERT INTO pedidos
VALUES
(1, 123, "2025-09-16", "não entregue"),
(2, 456, "2025-09-13", "entregue"),
(3, 789, "2025-09-11", "entregue");


UPDATE clientes
SET email = "maria.urbano@hotmail.com"
WHERE id = 123;


DELETE FROM pedidos WHERE id = 3;



