const SERVER = 'http://localhost:8080';

async function getAlunos() {

    const respostaAPI = await fetch(`${SERVER}/aluno`);
    const alunoList = await respostaAPI.json();

    const divAlunoList = document.getElementById('alunoList');

    divAlunoList.innerHTML = '';
    if (alunoList.length > 0) {
        for (let aluno of alunoList) {
            divAlunoList.innerHTML += `<div class="card">${aluno}</div>`;
        }
    } else {
        divAlunoList.innerHTML = '<p>Nenhum registro de aluno encontrado!</p>';
    }


}

async function adicionarAluno() {

    const aluno = document.getElementById('aluno').value;

    const response = await fetch(`${SERVER}/aluno/${aluno}`);
    const mensagemCadastro = await response.text();

    alert(mensagemCadastro);
    document.getElementById('aluno').value = '';
    getAlunos();

}

getAlunos();