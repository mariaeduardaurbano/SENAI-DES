// script.js — mais robusto e com logs para debug
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const cards = Array.from(document.querySelectorAll('.card'));

    if (!container) {
        console.error('Container não encontrado (.container). Verifique o HTML.');
        return;
    }
    if (!cards.length) {
        console.error('Nenhum card encontrado (.card). Verifique o HTML.');
        return;
    }

    // Clique no card para expandir
    cards.forEach(card => {
        card.addEventListener('click', (ev) => {
            // Se já estiver expandido, não reexecuta aqui (fechar só pelo botão)
            if (card.classList.contains('expanded')) return;

            // remove qualquer expanded anterior
            cards.forEach(c => c.classList.remove('expanded'));
            card.classList.add('expanded');
            container.classList.add('hide-others');
            // impede que cliques dentro do conteúdo 'fechem' por propagação
            ev.stopPropagation();
        });

        // botão fechar dentro do card (se existir)
        const closeBtn = card.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.remove('expanded');
                container.classList.remove('hide-others');
            });
        }
    });

    // clique fora dos cards fecha qualquer aberto
    document.addEventListener('click', (e) => {
        // se houver algum expandido, fecha
        const expanded = document.querySelector('.card.expanded');
        if (expanded) {
            expanded.classList.remove('expanded');
            container.classList.remove('hide-others');
        }
    });

    // evita fechar ao clicar dentro do card .content
    cards.forEach(card => {
        card.querySelector('.content')?.addEventListener('click', (ev) => {
            ev.stopPropagation();
        });
    });

    console.log('Cards inicializados:', cards.length);
});
