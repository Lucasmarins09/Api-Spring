function abrirFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.add('visivel');
}

function fecharFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.remove('visivel');
}

async function carregarTodos() {
    const respostaApi = await fetch('http://localhost:8080/personagem/todos');
    const personagemList = await respostaApi.json();

    if (personagemList.length > 0) {
        const divPersonagemList = document.getElementById('personagemList');
        divPersonagemList.innerHTML = '';

        for (let personagem of personagemList) {
            divPersonagemList.innerHTML += `<p>${personagem.id} 
            - ${personagem.nome} 
            - ${personagem.universo}
            - ${personagem.raca}
            - ${personagem.vivo}
            - ${personagem.imagem}
            </p>`;
        }
    }
}

carregarTodos();

async function salvar() {

    const inputNome = document.getElementById('nome').value;
    const inputUniverso = document.getElementById('universo').value;
    const inputRaca = document.getElementById('raca').value;
    const inputVivo = document.getElementById('vivo').checked;
    const inputImagem = document.getElementById('imagem').value;


    const personagem = {
        nome: inputNome,
        universo: inputUniverso,
        raca: inputRaca,
        vivo: inputVivo,
        imagem: inputImagem
    }
    
    const respostaApi = await fetch(`http://localhost:8080/personagem/novo`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(personagem)
    });
    const novoPersonagem = await respostaApi.json();

    console.log(novoPersonagem);
    fecharFormulario();
    carregarTodos();
}


function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('universo').value = '';
    document.getElementById('raca').value = '';
    document.getElementById('vivo').checked = true;
    document.getElementById('imagem').value = '';
}