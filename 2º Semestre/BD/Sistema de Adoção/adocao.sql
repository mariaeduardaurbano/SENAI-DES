DROP DATABASE IF EXISTS adocao;
CREATE DATABASE adocao;

/*----------------------------------------*/

USE adocao;

/*----------------------------------------*/

CREATE TABLE adotante (
    id_adotante INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100)
);

/*----------------------------------------*/

CREATE TABLE animal (
    id_animal INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(20) NOT NULL,
    raca VARCHAR(30),
    idade INT,
    status VARCHAR(20) DEFAULT 'disponível'
);

/*----------------------------------------*/

CREATE TABLE adocao (
    id_adocao INT AUTO_INCREMENT PRIMARY KEY,
    id_adotante INT,
    id_animal INT,
    data_adocao DATE,
    FOREIGN KEY (id_adotante) REFERENCES adotante(id_adotante),
    FOREIGN KEY (id_animal) REFERENCES animal(id_animal)
);

/*----------------------------------------*/

INSERT INTO adotante (nome, telefone, email) VALUES
('Gabrielly Souza', '(19)99999-9999', 'gabys@email.com'),
('Mirella Brolezi', '(19)88888-8888', 'mirellab@email.com'),
('Isabelle Borges', '(19)77777-7777', 'isabelleb@email.com');

/*----------------------------------------*/

INSERT INTO animal (nome, especie, raca, idade, status) VALUES
('Luna', 'gato', 'Siamês', 2, 'disponível'),
('Max', 'cachorro', 'Vira-lata', 3, 'adotado'),
('Pipoca', 'cachorro', 'shitzu', 1, 'disponível');

/*----------------------------------------*/

INSERT INTO adocao (id_adotante, id_animal, data_adocao) VALUES
(2, 2, '2025-11-11');

/*----------------------------------------*/

SELECT * FROM animal WHERE status = 'adotado';

/*----------------------------------------*/

SELECT adotante.nome AS Adotante,
animal.nome AS Animal,
animal.especie,
adocao.data_adocao
FROM adotante, animal, adocao
WHERE adocao.id_adotante = adotante.id_adotante AND adocao.id_animal = animal.id_animal AND adotante.nome = 'Mirella Brolezi';

/*----------------------------------------*/

SELECT * FROM animal
WHERE especie = 'gato' AND status = 'disponível';

/*----------------------------------------*/

SELECT animal.nome AS Animal,
adotante.nome AS Adotante,
adotante.telefone,
adotante.email,
adocao.data_adocao
FROM adotante, animal, adocao 
WHERE adocao.id_adotante = adotante.id_adotante AND adocao.id_animal = animal.id_animal AND animal.nome = 'Max';
