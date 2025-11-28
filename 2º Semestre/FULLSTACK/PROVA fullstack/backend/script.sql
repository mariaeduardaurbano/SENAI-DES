DROP DATABASE salaDeEstudos;
CREATE DATABASE salaDeEstudos;

USE salaDeEstudos;

CREATE TABLE alunos (
    id_aluno INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    turma VARCHAR(14)
);


CREATE TABLE salas (
    id_sala INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    capacidade INTEGER(10)
);


CREATE TABLE reservas (
    id_reserva INTEGER AUTO_INCREMENT PRIMARY KEY,
    id_sala INTEGER,
    id_aluno INTEGER,
    data_reserva DATE,
    horario TIME,
    FOREIGN KEY (id_sala) REFERENCES salas(id_sala),
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno)
);


INSERT INTO alunos VALUES (DEFAULT, "Mirella B.", "2B");
INSERT INTO alunos VALUES (DEFAULT, "Isabelle B.", "2B");
INSERT INTO alunos VALUES (DEFAULT, "Gabrielly S.", "2A");

INSERT INTO salas VALUES (DEFAULT, "Laboratório de Mídia e Tecnologia", 10);
INSERT INTO salas VALUES (DEFAULT, "Laboratório de Física", 15);
INSERT INTO salas VALUES (DEFAULT, "Espaço MAKER", 6);

INSERT INTO reservas VALUES (DEFAULT, 1, 3, "2025-11-28" , '13:30:00');
INSERT INTO reservas VALUES (DEFAULT, 2, 1,"2025-11-23" , '09:45:00');
INSERT INTO reservas VALUES (DEFAULT, 3, 2,"2025-11-22" , '10:00:00');


SELECT capacidade, COUNT(*) AS total
FROM salas s
JOIN reservas r ON s.id_sala = r.id_sala
GROUP BY capacidade;

SELECT nome, COUNT(*) AS total
FROM alunos a
JOIN reservas r ON r.id_aluno = a.id_aluno
GROUP BY nome;

SELECT nome, COUNT(*) AS total
FROM salas s
JOIN reservas r ON r.id_sala = s.id_sala
GROUP BY nome;





