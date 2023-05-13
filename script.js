// Obtém os botões da paginação
const botaoPagina1 = document.getElementById('pagina1');
const botaoPagina2 = document.getElementById('pagina2');
const botaoPagina3 = document.getElementById('pagina3');

// Obtém as divs das receitas
const divReceita1 = document.getElementById('receita1');
const divReceita2 = document.getElementById('receita2');
const divReceita3 = document.getElementById('receita3');

// Define a página inicial
let paginaAtual = 1;

// Define a função para trocar a página
function trocarPagina(novaPagina) {
  // Remove a classe 'active' dos botões da paginação
  botaoPagina1.classList.remove('active');
  botaoPagina2.classList.remove('active');
  botaoPagina3.classList.remove('active');

  // Esconde todas as receitas
  divReceita1.style.display = 'none';
  divReceita2.style.display = 'none';
  divReceita3.style.display = 'none';

  // Mostra a receita correspondente à nova página
  if (novaPagina === 1) {
    divReceita1.style.display = 'block';
    botaoPagina1.classList.add('active');
  } else if (novaPagina === 2) {
    divReceita2.style.display = 'block';
    botaoPagina2.classList.add('active');
  } else if (novaPagina === 3) {
    divReceita3.style.display = 'block';
    botaoPagina3.classList.add('active');
  }

  // Atualiza a página atual
  paginaAtual = novaPagina;
}

// Define a função para lidar com o clique nos botões da paginação
function handleClickPagina(event) {
  // Obtém o número da página do botão clicado
  const novaPagina = Number(event.target.id.replace('pagina', ''));

  // Troca para a nova página, se for diferente da atual
  if (novaPagina !== paginaAtual) {
    trocarPagina(novaPagina);
  }
}

// Adiciona um event listener para o clique nos botões da paginação
botaoPagina1.addEventListener('click', handleClickPagina);
botaoPagina2.addEventListener('click', handleClickPagina);
botaoPagina3.addEventListener('click', handleClickPagina);

// Mostra a página inicial
trocarPagina(paginaAtual);
