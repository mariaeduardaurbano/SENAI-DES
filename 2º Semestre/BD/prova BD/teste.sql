DROP DATABASE IF EXISTS teste;
CREATE DATABASE teste;

USE teste;

CREATE TABLE aluno(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE matriculas(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    aluno_id INTEGER,
    curso INTEGER,
    data matricula DATE,
    FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);


