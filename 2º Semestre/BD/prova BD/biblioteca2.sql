DROP DATABASE IF EXISTS biblioteca2;
CREATE DATABASE biblioteca2; 


USE biblioteca2;


CREATE TABLE livros(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano INTEGER
);


CREATE TABLE usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);


CREATE TABLE emprestimos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    usuario_id INTEGER,
    livro_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	FOREIGN KEY (livro_id) REFERENCES livros(id),
	data_retirada DATE,
    data_devolucao DATE
);


INSERT INTO livros
VALUES
(1, "Corte de Espinhos e Rosas", "Sarah J. Maas", 2015),
(2, "A Balada dos Felizes para o nunca", "Stephanie Garber", 2023),
(3, "A última festa", "Lucy Foley", 2020);


INSERT INTO usuarios
VALUES
(123, "Maria Eduarda Urbano", "m.urbano@gmail.com"),
(456, "Mirella Brolezi", "m.brolezi@gmail.com"),
(789, "Gabrielly Souza", "g.souza@gmail.com");

INSERT INTO emprestimos
VALUES
(1, 123, 2, "2025-09-16", DEFAULT),
(2, 456, 1, "2025-08-11", DEFAULT),
(3, 789, 3, "2025-09-04", DEFAULT);


UPDATE emprestimos
SET data_devolucao = "2025-09-02"
WHERE id = 2;