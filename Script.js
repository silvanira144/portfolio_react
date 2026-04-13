// Array de objetos para gerenciar os projetos dinamicamente
const projetos = [
    {
        id: 1,
        titulo: "Meu Portfólio React",
        descricao: "Um portfólio moderno desenvolvido com React e CSS Grid.",
        categoria: "react",
        link: "https://github.com/silvanira144/portfolio_react"
    },
    {
        id: 2,
        titulo: "Lista de Tarefas",
        descricao: "Aplicação simples de To-Do List feita com JavaScript puro.",
        categoria: "javascript",
        link: "#"
    },
    {
        id: 3,
        titulo: "Dashboard de Vendas",
        descricao: "Interface administrativa com gráficos dinâmicos em React.",
        categoria: "react",
        link: "#"
    },
    {
        id: 4,
        titulo: "Calculadora JS",
        descricao: "Calculadora funcional com manipulação de DOM.",
        categoria: "javascript",
        link: "#"
    }
];

// Função para renderizar os projetos no HTML
function renderizarProjetos(lista) {
    const container = document.getElementById('lista-projetos');
    container.innerHTML = ''; // Limpa o container antes de renderizar

    lista.forEach(projeto => {
        const card = `
            <div class="card-projeto" data-categoria="${projeto.categoria}">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Categoria:</strong> ${projeto.categoria.toUpperCase()}</p>
                <a href="${projeto.link}" target="_blank" style="color: #2980b9; text-decoration: none; font-weight: bold; display: block; margin-top: 10px;">Ver Projeto</a>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Função para filtrar projetos por categoria
function filtrarProjetos(categoria) {
    if (categoria === 'todos') {
        renderizarProjetos(projetos);
    } else {
        const filtrados = projetos.filter(p => p.categoria === categoria);
        renderizarProjetos(filtrados);
    }
}

// Inicializa a renderização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos(projetos);

    // Lógica simples para o formulário de contato
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pelo contato! Esta é uma demonstração, sua mensagem não foi enviada de verdade.');
        form.reset();
    });
});
