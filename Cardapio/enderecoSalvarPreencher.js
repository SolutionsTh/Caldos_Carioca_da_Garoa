function salvarEnderecoCep(){
    if(document.getElementById("pedidoCep").value != ""){localStorage.setItem("pedidoCepSalvo", document.getElementById("pedidoCep").value);
    }else{
        localStorage.setItem("pedidoCepSalvo","");
    }
}
function salvarEnderecoNumero(){
    if(document.getElementById("pedidoNumero").value != ""){localStorage.setItem("pedidoNumeroSalvo", document.getElementById("pedidoNumero").value);
    }else{
        localStorage.setItem("pedidoNumeroSalvo","");
    }
}
function salvarEnderecoBloco(){
    if(document.getElementById("pedidoBloco").value != ""){localStorage.setItem("pedidoBlocoSalvo", document.getElementById("pedidoBloco").value);
    }else{
        localStorage.setItem("pedidoBlocoSalvo","");
    }
}
function salvarEnderecoApartamento(){
    if(document.getElementById("pedidoApartamento").value != ""){localStorage.setItem("pedidoApartamentoSalvo", document.getElementById("pedidoApartamento").value);
    }else{
        localStorage.setItem("pedidoApartamentoSalvo","");
    }
}
function salvarEnderecoReferencia(){
    if(document.getElementById("pedidoReferencia").value != ""){localStorage.setItem("pedidoReferenciaSalvo", document.getElementById("pedidoReferencia").value);
    }else{
        localStorage.setItem("pedidoReferenciaSalvo","");
    }
}

function preencherEndereco(){
    document.getElementById("pedidoCep").value = localStorage.getItem("pedidoCepSalvo");
    document.getElementById("pedidoNumero").value = localStorage.getItem("pedidoNumeroSalvo");
    document.getElementById("pedidoBloco").value = localStorage.getItem("pedidoBlocoSalvo");
    document.getElementById("pedidoApartamento").value = localStorage.getItem("pedidoApartamentoSalvo");
    document.getElementById("pedidoReferencia").value = localStorage.getItem("pedidoeferenciaSalvo");

    const cep = document.getElementById("pedidoCep");
    const value = cep.value.replace(/[^0-9]+/, '');
    const url = `https://viacep.com.br/ws/${value}/json/`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
        if (json.logradouro) {
            document.getElementById('pedidoRua').value = json.logradouro;
            document.getElementById('pedidoBairro').value = json.bairro;
            document.getElementById('pedidoCidade').value = json.localidade;
            document.getElementById('pedidoEstado').value = json.uf;
        }
    });
}
window.onload = preencherEndereco;