SELECT SUM(preco) AS "valor_total" FROM locacoes;

SELECT SUM(preco) AS "valor_total"
FROM locacoes
WHERE status = "entregue";

SELECT 
AVG(preco) AS "preco_medio"
FROM filmes
WHERE categoria = "comédia";

SELECT 
AVG(preco) AS "preco_medio"
FROM locacoes
WHERE status = "pendente";

SELECT COUNT(*) FROM filmes;

SELECT COUNT(*) FROM locacoes
WHERE 
YEAR(data_locacao) = 2025;

SELECT 
MAX(preco) AS "filme_mais_caro"
FROM filmes;

SELECT 
MAX(data_locacao) AS "locacao_mais_recente"
FROM locacoes;

SELECT 
MIN(preco) AS "mais_barato"
FROM filmes
WHERE categoria = "Terror";

SELECT 
MIN(data_locacao) AS "locacao_mais_antiga"
FROM locacoes;

SELECT CONCAT(cliente_id, " - ", filme_id) FROM locacoes;

SELECT CONCAT("Cliente ", cliente_id, " alugou ", filme_id, " em ", data_locacao) FROM locacoes;

SELECT nome, LENGTH(nome) AS tamanho_nome FROM clientes;

SELECT titulo, LENGTH(titulo) AS tamanho_titulo 
FROM filmes
WHERE LENGTH(titulo) >= 15;

SELECT LOWER(titulo) AS titulo_minusculo FROM filmes;

SELECT LOWER(nome) AS nome_minusculo FROM clientes;

SELECT UPPER(nome) AS nome_maiusculo FROM clientes;

SELECT UPPER(categoria) AS categoria_maiusculo FROM filmes;

SELECT ROUND(preco) AS preco_inteiro FROM filmes;

SELECT ROUND(preco, 1) AS preco_decimal FROM filmes;

SELECT preco, POW(preco, 2) AS preco_ao_quadrado FROM filmes;

SELECT id, POW(2, id) AS dois_elevado_id FROM clientes;

SELECT id, MOD(id, 2) AS par_ou_impar FROM clientes;

SELECT id, MOD(id, 3) AS resto_div_3 FROM filmes;

SELECT NOW() AS data_hora_atual;

SELECT * FROM locacoes WHERE data_locacao < CURDATE();

SELECT data_locacao, DAY(data_locacao) AS dia FROM locacoes;

SELECT data_locacao FROM locacoes
WHERE
MONTH(data_locacao) = 01;