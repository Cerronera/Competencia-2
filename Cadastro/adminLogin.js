function realizarLogin() {
    // Lógica para realizar o login aqui
    // Por exemplo, você pode obter os valores dos campos de entrada de usuário e senha
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const usuarioValido = 'admin';
    const senhaValida = 'admin123';

    if(usuario === usuarioValido && senha === senhaValida) {
        alert('Login realizado com sucesso!');
        // Redirecionar para a página de administração
        window.location.href = 'telaAdmin.html';
    } else {
        alert('Usuário ou senha inválidos. Tente novamente.');
    }

   
}

// Adicione um ouvinte de evento ao botão de login para chamar a função realizarLogin quando for clicado
const botaoLogin = document.getElementById('botao-login');
botaoLogin.addEventListener('click', realizarLogin);