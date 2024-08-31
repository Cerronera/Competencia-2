document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-devolucao');
    const name = document.getElementById('nome');
    const codigo = document.getElementById('codigo');
    const dataDevolucao = document.getElementById('data-devolucao');

    function checkInputsName() {
        const nameValue = name.value;
        if (nameValue === '') {
            errorinput(name, "Preencha o campo Nome");
            return false;
        } else {
            const formItem = name.parentElement;
            formItem.className = "form-content";
            return true;
        }
    }

    function checkInputsCodigo() {
        const codigoValue = codigo.value;
        if (codigoValue === '') {
            errorinput(codigo, "Preencha o campo Código");
            return false;
        } else {
            const formItem = codigo.parentElement;
            formItem.className = "form-content";
            return true;
        }
    }

    function checkInputsDataDevolucao() {
        const dataDevolucaoValue = dataDevolucao.value;
        if (dataDevolucaoValue === '') {
            errorinput(dataDevolucao, "Preencha o campo Data de Devolução");
            return false;
        } else {
            const formItem = dataDevolucao.parentElement;
            formItem.className = "form-content";
            return true;
        }
    }

    function checkForm() {
        const isNameValid = checkInputsName();
        const isCodigoValid = checkInputsCodigo();
        const isDataDevolucaoValid = checkInputsDataDevolucao();

        return isNameValid && isCodigoValid && isDataDevolucaoValid;
    }

    function errorinput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a");
        textMessage.innerText = message;
        formItem.className = 'form-content error';
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (checkForm()) {
            const devolucao = {
                nome_usuario: name.value,
                codigo: codigo.value,
                dataDevolucao: dataDevolucao.value
            };

            console.log('Enviando dados da devolução:', devolucao);

            fetch('http://localhost:3000/devolucoes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(devolucao)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta do servidor:', data);
                if (data.error) {
                    console.error('Erro ao devolver equipamento:', data.details);
                    alert("Erro ao devolver equipamento");
                } else {
                    alert("Equipamento devolvido com sucesso");
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Erro ao devolver equipamento:', error);
                alert("Erro ao devolver equipamento");
            });
        }
    });
});