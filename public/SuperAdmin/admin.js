document.getElementById('create-client-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    
    // Exemplo de uma requisição POST para criar um cliente
    fetch('/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        // Atualize a tabela de clientes
        // ...
    });
});

// Função para carregar clientes existentes na tabela
function loadClients() {
    fetch('/api/clientes')
        .then(response => response.json())
        .then(data => {
            // Popule a tabela com os clientes
            // ...
        });
}

loadClients();
