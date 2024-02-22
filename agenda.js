const form = document.getElementById('form-contatos');
const nome = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

//Para ser inserido 8 dígitos separados por traço//
    const inputNumeroContato = document.getElementById('numero');

inputNumeroContato.addEventListener('input', function(e) {
    let numeros = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    if (numeros.length > 8) {
        numeros = numeros.slice(0, 8); // Limita o número a oito dígitos
    }
    numeros = numeros.replace(/(\d{4})(\d{4})/, '$1-$2'); // Adiciona um hífen após o quarto caractere
    e.target.value = numeros;
});


//Função que adiciona uma nova linha a cada novo contato adicionado//
function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('numero');

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O contato: ${inputNumeroContato.value} já foi inserido`);
    } else {
        numeros.push(inputNumeroContato.value);

    let linha ='<tr>';
    linhas+= `<td>${inputNomeContato.value}</td>`;
    linhas+= `<td>${inputNumeroContato.value}</td>`;

    linha ='</tr>';

    linhas += linha;
    }

    inputNomeContato.value ='';
    inputNumeroContato.value ='';
}

//Função que atualiza a tabela//
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

