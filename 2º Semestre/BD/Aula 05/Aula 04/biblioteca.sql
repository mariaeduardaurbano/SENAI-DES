DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca;

/*-----------------*/

USE biblioteca;

/*-----------------*/
CREATE TABLE usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nascimento DATETIME
);

/*-----------------*/

CREATE TABLE livros(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    publicacao INTEGER
);

/*-----------------*/

CREATE TABLE emprestimos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    usuario_id INTEGER,
    livro_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	FOREIGN KEY (livro_id) REFERENCES livros(id),
	data_emprestimo DATE,
    data_devolucao DATE
);

/*-----------------*/

INSERT INTO usuarios (nome, email, nascimento)
VALUES ("Maria Eduarda", "m.oliveiraurbano@gmail.com", 2009-05-07),
("Mirella Brolezi", "mi.brolezi@gmail.com", 2009-04-02),
("Lara Oliveira", "lara.oliveira@gmail.com", 2008-10-26 );

/*-----------------*/

SELECT * FROM usuarios;

/*-----------------*/

SELECT * FROM usuarios WHERE id = 2;

/*-----------------*/

INSERT INTO livros (titulo, autor, publicacao)
VALUES("Era uma vez um coracao partido", "Stephanie Garber", 2022),
("A balada dos felizes para o nunca", "Stephanie Garber", 2023),
("A maldicao do verdadeiro amor", "Stephanie Garber", 2023);

/*-----------------*/

SELECT * FROM livros; 


/*-----------------*/

SELECT titulo, publicacao FROM livros WHERE id = 3; 

/*-----------------*/

INSERT INTO emprestimos (usuario_id, livro_id, data_emprestimo)
VALUES
(1, 2, "2025-08-26"),
(2, 3, "2025-08-25");

SELECT * FROM emprestimos;

SELECT usuario_id, data_emprestimo FROM emprestimos; 


UPDATE emprestimos
SET data_devolucao = "2025-08-31"
WHERE id = 1;


UPDATE emprestimos
SET data_devolucao = "2025-09-03"
WHERE id = 2;

SELECT data_devolucao FROM emprestimos;

