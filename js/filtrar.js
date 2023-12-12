// * Todas as funções relacionadas ao menu "Filtrar por disciplina"

let btnFiltrar = document.querySelector("#filtroBotao")

btnFiltrar.addEventListener("click", alternaFiltroMenu)

// Alternar a exibição do menu suspenso de filtro
function alternaFiltroMenu() {
  const filtroMenu = document.getElementById('filtroMenu');
  if (filtroMenu.style.display === 'none' || filtroMenu.style.display === '') {
    filtroMenu.style.display = 'block';
  } else {
    filtroMenu.style.display = 'none';
  }
}

// Filtrar a lista de requisições com base na disciplina selecionada
function filtraRequisicoes() {

  // Busca a listagem COMPLETA de tarefas
  let tarefas = localStorage_pegaTarefas()

  let listaFinal;

  // Pega o valor do filtro selecionado
  const filtroSelecionado = document.getElementById('filtroMenu').value;

  // Caso o filtro selecionado seja vazio, exibe a listagem completa
  if (filtroSelecionado == '') {
    atualizaTabela(tarefas);
    listaFinal = tarefas;

  // Senão, exibe a listagem filtrada
  } else {
    const listaFiltrada = tarefas.filter(requisicao => requisicao.disciplina === filtroSelecionado);
    atualizaTabela(listaFiltrada);
    listaFinal = listaFiltrada;
  }

  atualizaTotalTarefas()
  return listaFinal;
}