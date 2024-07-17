const form = document.getElementById('form');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const dataDevolucao = document.getElementById('data-devolucao');
const quantidadeDevolvida = document.getElementById('quantidade-devolvida');
const codigosProdutosDevolvidos = document.getElementById('codigos-devolvidos');
const estadoEquipamentos = document.getElementById('estado-equipamentos');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});

nome.addEventListener("blur",() => {
    checkInputsNome();
});

telefone.addEventListener("blur",() => {
    checkInputsTelefone();
});

dataDevolucao.addEventListener("blur",() => {
    checkInputsDataDevolucao();
});

quantidadeDevolvida.addEventListener("blur",() => {
    checkInputsQuantidadeDevolvida();
});

codigosProdutosDevolvidos.addEventListener("blur",() => {
    checkInputsCodigosProdutosDevolvidos();
});

estadoEquipamentos.addEventListener("blur",() => {
    checkInputsEstadoEquipamentos();
});

function checkInputsNome() {
    const nomeValue = nome.value;
    if(nomeValue === '') {
        errorInput(nome, "Preencha o campo Nome");
    }else {
        const formItem = nome.parentElement;
        formItem.className = "form-content"
    }
}   

function checkInputsTelefone() {
    const telefoneValue = telefone.value;
    if(telefoneValue === '') {
        errorInput(telefone, "Preencha o campo Telefone");
    }else {
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsDataDevolucao() {
    const dataDevolucaoValue = dataDevolucao.value;
    if(dataDevolucaoValue === '') {
        errorInput(dataDevolucao, "Preencha o campo Data de Devolução");
    }else {
        const formItem = dataDevolucao.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsQuantidadeDevolvida() {
    const quantidadeDevolvidaValue = quantidadeDevolvida.value;
    if(quantidadeDevolvidaValue === '') {
        errorInput(quantidadeDevolvida, "Preencha o campo Quantidade Devolvida");
    }else {
        const formItem = quantidadeDevolvida.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsCodigosProdutosDevolvidos() {
    const codigosProdutosDevolvidosValue = codigosProdutosDevolvidos.value;
    if(codigosProdutosDevolvidosValue === '') {
        errorInput(codigosProdutosDevolvidos, "Preencha o campo Códigos dos Produtos Devolvidos");
    }else {
        const formItem = codigosProdutosDevolvidos.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsEstadoEquipamentos() {
    const estadoEquipamentosValue = estadoEquipamentos.value;
    if(estadoEquipamentosValue === '') {
        errorInput(estadoEquipamentos, "Preencha o campo Estado dos Equipamentos");
    }else {
        const formItem = estadoEquipamentos.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputsNome();
    checkInputsTelefone();
    checkInputsDataDevolucao();
    checkInputsQuantidadeDevolvida();
    checkInputsCodigosProdutosDevolvidos();
    checkInputsEstadoEquipamentos();
    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });
    if(isValid) {
        alert("Devolução realizada com sucesso");
    }else {
        alert("Preencha todos os campos corretamente");
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = 'form-content error';
}