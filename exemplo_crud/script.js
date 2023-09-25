let dados = []

const crudforn = document.getElementById('crud-form')
const nomeInput = document.getElementById('nome')
const emailInput = document.getElementById('email')
const editIndexInput = document.getElementById('edit-index')

//listagem dos dados

const listarDados = document.getElementById('listar-dados')

//função para adicionar / editar dados

function adicionarEditarDados(event){
    event.prevenDefault()

    const nome = nomeInput.value
    const email = emailInput.value
    const editIndex = ParseInt(editIndexInput.value)

    if(nome && email){
        if (editIndex === -1){
            constnovoDados =(nome, email)
            dados.push(novoDado)
        }else{
            dados[editIndex] = {nome, email}
        }
        exibirDados()
        limparFormulario()

    }
}

//função para editar os dados 

function editarDado(index){
    const dado = dados[index]
    nomeInput.value = dado.nome
    emailInput.value = dado.email
    editIndexInput.value = index
}

//função remover os dados
function removerDados(index){
    dados.splice(index,1)
    exibirDados()
}

//função para limpar os formulares
function limparFormulario(){
    nomeInput.value= ''
    emailInput,value = ''
    editIndexInput.value= -1
}

//adicionar evento de envio do formulario 
crudforn.addEventListener('submit', adicionarEditarDados)

//exibir dados iniciais

function exibirDados(){
    listarDados.innerHTML = ''

    dados.forEach((dado, index) =>{
        const listItem = document.createElement('li')
        listItem.innerHTML = 
        `
        ${dado.nome} - ${dado.email}
        <button class="btn btn-dark btn-sm float-end" onclick="editarDado(${index})">Editar</button>
        <button class="btn btn-danger btn-sm float-end" onclick="removerDado(${index})">Remover</button>
        `
        listarDados.appendChild(listItem)
})
}

exibirDados()