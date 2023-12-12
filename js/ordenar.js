// * Todas as funções relacionadas ao botão "Ordenar por prazo"

let btnOrdenar = document.querySelector("#ordenarBotao")

btnOrdenar.addEventListener("click", ordenaData)

// Ordenar a lista por data
function ordenaData() {
  let tarefas = localStorage_pegaTarefas()
  tarefas.sort((a, b) => new Date(a.dataDeConclusao) - new Date(b.dataDeConclusao));

  atualizaTabela(tarefas);
  atualizaTotalTarefas()
}