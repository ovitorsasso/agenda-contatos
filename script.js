const formulario = document.getElementById('formulario');
const tabelaContatos = document.getElementById('tabela-contatos');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaTelefone = document.createElement('td');

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);

    tabelaContatos.appendChild(novaLinha);

    formulario.reset();
});
