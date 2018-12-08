function formataPreco(preco) {
    return "R$" + preco.toFixed(2).replace(".",",")
}