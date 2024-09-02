document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        alert('Você não está autenticado!');
        window.location.href = 'adminLogin.html';
        return;
    }

    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };

        const [equipamentosResponse, emprestimosResponse, devolucoesResponse] = await Promise.all([
            fetch('http://localhost:3000/equipamentos', { headers }),
            fetch('http://localhost:3000/emprestimos', { headers }),
            fetch('http://localhost:3000/devolucoes', { headers })
        ]);

        if (!equipamentosResponse.ok || !emprestimosResponse.ok || !devolucoesResponse.ok) {
            throw new Error('Erro ao buscar informações');
        }

        const equipamentos = await equipamentosResponse.json();
        const emprestimos = await emprestimosResponse.json();
        const devolucoes = await devolucoesResponse.json();

        document.getElementById('equipamentos-info').innerText = JSON.stringify(equipamentos, null, 2);
        document.getElementById('emprestimos-info').innerText = JSON.stringify(emprestimos, null, 2);
        document.getElementById('devolucoes-info').innerText = JSON.stringify(devolucoes, null, 2);
    } catch (error) {
        console.error('Erro ao buscar informações:', error);
        alert('Erro ao buscar informações');
    }
});