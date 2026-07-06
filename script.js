function calcular() {
    const produto = document.getElementById("produto");
    // Pega o preço base que está guardado no atributo 'data-preco' da opção selecionada
    const precoBase = parseFloat(produto.options[produto.selectedIndex].getAttribute('data-preco'));

    const quantidade = parseFloat(document.getElementById("quantidade").value);
    const margem = parseFloat(document.getElementById("ajusteMargem").value) || 0;

    const resPrecoQuilo = document.getElementById("resPrecoQuilo");
    const resValorTotal = document.getElementById("resValorTotal");
    const cardResultado = document.getElementById("cardResultado");

    // Validação da quantidade
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Por favor, digite uma quantidade válida!");
        return;
    }

    // 1. Calcula o preço por quilo aplicando a margem (ex: 10 para +10% ou -5 para -5%)
    const precoQuiloAjustado = precoBase * (1 + (margem / 100));

    // 2. Calcula o valor total final
    const total = precoQuiloAjustado * quantidade;

    // 3. Insere os valores formatados em Real (R$) nos respectivos campos
    resPrecoQuilo.innerHTML = `R$ ${precoQuiloAjustado.toFixed(2).replace('.', ',')}`;
    resValorTotal.innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // 4. Mostra o bloco de resultado removendo a classe que o escondia
    cardResultado.classList.remove('hidden');
}
