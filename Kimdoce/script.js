// Função para exibir a seção correspondente quando um menu for clicado
function mostrarSecao(secao) {
    // Oculta todas as seções
    document.querySelectorAll('.content').forEach(div => div.style.display = 'none');
    // Exibe a seção selecionada
    document.getElementById(secao).style.display = 'block';
}

// Função para finalizar o pedido e abrir o WhatsApp
function finalizarPedido() {
    let selecionados = []; // Lista para armazenar os sabores escolhidos

    // Captura os checkboxes marcados e adiciona os valores à lista
    document.querySelectorAll('#sabores input[type=checkbox]:checked').forEach(el => selecionados.push(el.value));

    // Captura os campos de texto e adiciona os valores à lista se não estiverem vazios
    document.querySelectorAll('#sabores input[type=text]').forEach(el => {
        if (el.value.trim() !== '') selecionados.push(el.value.trim());
    });

    // Cria a mensagem do pedido
    let mensagem = `Olá, gostaria de finalizar meu pedido a seguir: ${selecionados.join(', ')}`;
    let numero = "5519998299096"; // Número do WhatsApp da empresa

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}

// Função para gerar os granulados aleatoriamente
function gerarGranulados() {
    const body = document.body;
    const numeroGranulados = 50; // Quantidade de granulados

    for (let i = 0; i < numeroGranulados; i++) {
        const granulado = document.createElement('div');
        granulado.classList.add('granulado');

        // Define a posição inicial aleatória dos granulados
        granulado.style.left = `${Math.random() * 100}vw`;
        granulado.style.animationDuration = `${Math.random() * 2 + 2}s`; // Tempo aleatório para a animação

        // Adiciona o granulado ao corpo
        body.appendChild(granulado);
    }
}

// Chama a função para gerar granulados quando a página carregar
window.onload = gerarGranulados;
