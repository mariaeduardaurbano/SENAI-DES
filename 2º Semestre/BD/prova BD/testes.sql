data clientes: Nome completo, e-mail, cpf, telefone e endereço.

cpf deve ser obrigatório.

rotas: BUSCAR cliente pelo cpf para consultar os dados pessoais. (endereço de entrega e número de telefone).

-----------------------------------------

data produtos: Nome, descrição, preço e quantidade disponível em estoque. 

rotas: ALTERAR o preço dos produtos ou corrigir a quantidade no estoque manualmente.
BUSCAR dados de um produto a partir do código
APAGAR do sistema um produto.

-----------------------------------------

data compras: Cliente, produto, quantidade e data de compra.

cada pedido terá sempre apenas um único produto.

rotas: 

CADASTRAR compra nova.

ATUALIZAR status do pedido.

o sistema não pode aceitar pedidos com valor negativo ou igual a zero.

LISTAR todos os pedidos cadastrados e BUSCAR pelo código.