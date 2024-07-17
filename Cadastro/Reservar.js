const form = document.getElementById('form');
const name = document.getElementById('nome');
const tamanho = document.getElementById('tamanho');
const quantidade = document.getElementById('quantidade');
const tipo = document.getElementById('tipo');
const codigo = document.getElementById('codigos');
const dataEmprestimo = document.getElementById('data-emprestimo');
const dataDevolucao = document.getElementById('data-devolucao');
const telefone = document.getElementById('telefone');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});

name.addEventListener("blur",() => {
    checkInputsName();
});

tamanho.addEventListener("blur",() => {
    checkInputsTamanho();
});

quantidade.addEventListener("blur",() => {
    checkInputsQuantidade();
});

codigo.addEventListener("blur",() => {
    checkInputsCodigo();
});

dataEmprestimo.addEventListener("blur",() => {
    checkInputsDataEmprestimo();
});

dataDevolucao.addEventListener("blur",() => {
    checkInputsDataDevolucao();
});

telefone.addEventListener("blur",() => {
    checkInputsTelefone();
});

function checkInputsName() {
    const nameValue = name.value;
    if(nameValue === '') {
        errorinput(name, "Preencha o campo Nome");
    }else {
        const formItem = name.parentElement;
        formItem.className = "form-content"
    }
}   

function checkInputsTamanho() {
    const tamanhoValue = tamanho.value;
    if(tamanhoValue === '') {
        errorinput(tamanho, "Preencha o campo Tamanho");
    }else {
        const formItem = tamanho.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsQuantidade() {
    const quantidadeValue = quantidade.value;
    if(quantidadeValue === '') {
        errorinput(quantidade, "Preencha o campo Quantidade");
    }else {
        const formItem = quantidade.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsCodigo() {
    const codigoValue = codigo.value;
    if(codigoValue === '') {
        errorinput(codigo, "Preencha o campo Código");
    }else {
        const formItem = codigo.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsDataEmprestimo() {
    const dataEmprestimoValue = dataEmprestimo.value;
    if(dataEmprestimoValue === '') {
        errorinput(dataEmprestimo, "Preencha o campo Data de Empréstimo");
    }else {
        const formItem = dataEmprestimo.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsDataDevolucao() {
    const dataDevolucaoValue = dataDevolucao.value;
    if(dataDevolucaoValue === '') {
        errorinput(dataDevolucao, "Preencha o campo Data de Devolução");
    }else {
        const formItem = dataDevolucao.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputsTelefone() {
    const telefoneValue = telefone.value;
    if(telefoneValue === '') {
        errorinput(telefone, "Preencha o campo Telefone");
    }else {
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputsName();
    checkInputsTamanho();
    checkInputsQuantidade();
    checkInputsCodigo();
    checkInputsDataEmprestimo();
    checkInputsDataDevolucao();
    checkInputsTelefone();
    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });
    const submitButton = form.querySelector('button[type="submit"]');

    if(isValid) {
        alert("Reserva realizada com sucesso");
        submitButton.classList.add('success');
        submitButton.classList.remove('error');
    }else {
        alert("Preencha todos os campos corretamente");
        submitButton.classList.add('error');
        submitButton.classList.remove('success');
    }
}

function errorinput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = 'form-content error';
}