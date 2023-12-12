// * Todas as funções relacionadas ao formulário "Adicionar nova tarefa"

// Botão "Adicionar"
let btnAdicionar = document.querySelector("#adicionar-licao")

// Escutar o clique do botão e chama a função adicionaRequisicao()
btnAdicionar.addEventListener("click", adicionaRequisicao)

// Adicionar uma nova requisição à lista
function adicionaRequisicao() {

  // Pegando os elementos do HTML por id
  const disciplinaInput = document.getElementById('disciplina');
  const descricaoInput = document.getElementById('descricao');
  const dataInput = document.getElementById('dataDeConclusao');

  const novoItem = {
    "disciplina": disciplinaInput.value,
    "descricao": descricaoInput.value,
    "dataDeConclusao": dataInput.value,
  };

  localStorage_addNovaTarefa(novoItem)

  // Limpa os campos do formulário
  disciplinaInput.value = '';
  descricaoInput.value = '';
  dataInput.value = '';

  // Carregando as disciplinas do localStorage QUANDO A PAGINA CARREGA
  let tarefas = localStorage_pegaTarefas()
  atualizaTotalTarefas()
  // Atualizar a lista de requisições na tabela da interface
  atualizaTabela(tarefas);
}