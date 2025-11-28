SELECT * FROM locacoes 
WHERE status = "pendente";

SELECT * FROM locacoes 
WHERE status != "cancelado";

SELECT * FROM locacoes 
WHERE status = "entregue" AND categoria = "Ação";

SELECT * FROM locacoes 
WHERE filme LIKE "%Velozes%";

SELECT * FROM locacoes 
WHERE categoria IN ("Comédia", "Terror", "Animação");

SELECT * FROM locacoes
WHERE data_locacao 
BETWEEN "2025-01-01" AND "2025-01-31";

SELECT * FROM locacoes
ORDER BY data_locacao DESC;

SELECT * FROM locacoes
LIMIT 10 OFFSET 10;

SELECT 
	cliente_nome AS "Nome do Cliente",
	filme AS "Nome do Filme"
FROM locacoes;

