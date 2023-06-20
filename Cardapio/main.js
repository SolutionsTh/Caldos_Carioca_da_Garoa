(function(){
	const cep = document.getElementById("pedidoCep");  
  cep.addEventListener('blur', e=> {
  		const value = cep.value.replace(/[^0-9]+/, '');
      const url = `https://viacep.com.br/ws/${value}/json/`;      
      fetch(url)
      .then( response => response.json())
      .then( json => {      		
          if( json.logradouro ) {
          	document.getElementById('pedidoRua').value = json.logradouro;
            document.getElementById('pedidoBairro').value = json.bairro;
            document.getElementById('pedidoCidade').value = json.localidade;
            document.getElementById('pedidoEstado').value = json.uf;
          }
      }); 
  });
})();
function finalizar(event){
    var opcao = event.target.getAttribute('data-nome');
    var opcaoNome = opcao.slice(opcao,-15);
    var opcaoTamanho = opcao.slice(-14).replace(opcao.slice(-8),"");
    var opcaoValor = opcao.slice(-8);
    document.getElementById("pedidoNome").innerHTML = opcaoNome;
    document.getElementById("pedidoTamanho").innerHTML = opcaoTamanho;
    document.getElementById("pedidoValor").innerHTML = opcaoValor;
    document.getElementById("pedidoTotalPedido").innerHTML = opcaoValor;   
    document.getElementById("conteudoCardapio").className = "conteudoCardapioNone";
    document.getElementById("conteudoPedido").className = "conteudoPedido";
}
function totalPedido(){
    var pedidoValor = document.getElementById("pedidoValor").innerText;    
    var pedidoQuantidade = document.getElementById("pedidoQuantidade").value;
    document.getElementById("pedidoTotalPedido").innerText = "R$ " + parseInt(pedidoValor.slice(pedidoValor,-3).replace("R$","")) * parseInt(pedidoQuantidade) + ",00";
}
function concluirPedido(){
    if(document.getElementById("pedidoCep").value != ""){
        var pedidoNome = document.getElementById("pedidoNome").innerText;
        var pedidoTamanho = ".%0A*Tamanho: * " + document.getElementById("pedidoTamanho").innerText;
        var pedidoQuantidade =  ".%0A*Quantidade: * " + document.getElementById("pedidoQuantidade").value;
        var pedidoCep = ".%0A%0A*Endereço para entrega*%0A*CEP: *" + document.getElementById("pedidoCep").value;
        var pedidoRua = ".%0A*Rua: * " + document.getElementById("pedidoRua").value;
        var pedidoBairro = ".%0A*Bairro: * " + document.getElementById("pedidoBairro").value;
        var pedidoCidade = ".%0A*Cidade: * " + document.getElementById("pedidoCidade").value;
        var pedidoEstado = ".%0A*Estado: * " + document.getElementById("pedidoEstado").value;
        if(document.getElementById("pedidoNumero").value != ""){var pedidoNumero = ".%0A*Número: * " + document.getElementById("pedidoNumero").value + ".";}else{var pedidoNumero = "";}
        if(document.getElementById("pedidoBloco").value != ""){var pedidoBloco = ".%0A*Bloco: * " + document.getElementById("pedidoBloco").value + ".";}else{var pedidoBloco = "";}        
        if(document.getElementById("pedidoApartamento").value != ""){var pedidoApartamento = ".%0A*Apartamento: * " + document.getElementById("pedidoApartamento").value + ".";}else{var pedidoApartamento = "";}
        if(document.getElementById("pedidoReferencia").value != ""){var pedidoReferencia = ".%0A*Referência: * " + document.getElementById("pedidoReferencia").value + ".";}else{var pedidoReferencia = "";}        
        document.getElementById("conteudoBotaoConcluirPedido").href = "https://wa.me/5511989182715?text=*Pedido*%0A*Sabor: *" + pedidoNome + pedidoTamanho +pedidoQuantidade + pedidoCep + pedidoRua + pedidoBairro + pedidoCidade + pedidoEstado + ".%0A*Número: * " + pedidoNumero + ".%0A*Bloco: * " + pedidoBloco + pedidoApartamento + pedidoReferencia;
    }else{
        window.alert("Favor, inserir um endereço para entrega!");
    }
}