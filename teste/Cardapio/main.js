function finalizar(event){
    var opcao = event.target.getAttribute('data-nome');
    var opcaoNome = opcao.slice(opcao,-15);
    var opcaoTamanho = opcao.slice(-14).replace(opcao.slice(-8),"");
    var opcaoValor = opcao.slice(-8);

    document.getElementById("pedidoNome").innerHTML = opcaoNome;
    document.getElementById("pedidoTamanho").innerHTML = opcaoTamanho;
    document.getElementById("pedidoValor").innerHTML = opcaoValor;

    
    document.getElementById("conteudoCardapio").className = "conteudoCardapioNone";
    document.getElementById("conteudoEndereco").className = "conteudoEndereco";
}

function concluirPedido(){

}