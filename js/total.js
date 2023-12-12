// * Todas as funções relacionadas ao botão "Total de tarefas"

let btnTotal = document.querySelector("#totalBotao")

btnTotal.addEventListener("click", atualizaTotalTarefas)

/**
 * Exibir o total de requisições excluindo as com classe "finalizado"
 */
function atualizaTotalTarefas() {
  let tarefas = localStorage_pegaTarefas();
  let totalRequisicoes = 0;

  // Pegando valor do select do filtro
  const filtroSelecionado = document.getElementById('filtroMenu').value;

  if( filtroSelecionado != '' ) {
    totalRequisicoes = tarefas.reduce((total, requisicao) => {
      if (!requisicao.feito && filtroSelecionado === requisicao.disciplina) {
        return total + 1;
      }
      return total;
    }, 0);
  } else {
     totalRequisicoes = tarefas.reduce((total, requisicao) => {
      if (!requisicao.feito) {
        return total + 1;
      }
      return total;
    }, 0);
  }
  const totalValor = document.getElementById('totalValor');
  const totalResultado = document.getElementById('totalResultado');

  totalValor.textContent = totalRequisicoes;
  totalResultado.style.display = 'block'; // Exibe o resultado
}
