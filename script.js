function calcular() {
    const produto = document.getElementById("produto");
    const preco = parseFloat(produto.value);

    const quantidade = parseFloat(
        document.getElementById("quantidade").value
    );

    const resultado = document.getElementById("resultado");

    if (quantidade <= 0 || isNaN(quantidade)) {
        resultado.innerHTML = "Digite uma quantidade válida!";
        return;
    }

    const total = preco * quantidade;

    resultado.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}
