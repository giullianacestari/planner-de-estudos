// * Todas as funções relacionadas ao desenho e atualização da tabela

// ! Fixed do firefox para o select (ele não reseta)
document.getElementById('filtroMenu').value = ""

// Carregando as disciplinas do localStorage QUANDO A PAGINA CARREGA
let tarefas = localStorage_pegaTarefas()
// Inicializa a lista de requisições na tabela da interface QUANDO A PAGINA CARREGA
atualizaTabela( tarefas );

/**
 * Atualizar a lista de requisições na tabela da interface
 * @param thisTarefas lista de tarefas
 */
function atualizaTabela( thisTarefas ) {
  // Pegando o local da tabela
  const tabelaRequisicoes = document.getElementById('tabelaRequisicoes');
  // Limpa a tabela atual
  tabelaRequisicoes.innerHTML = '';

  // Desenhando a tabela
  thisTarefas.forEach((requisicao, index) => {
    const linhaTabela = tabelaRequisicoes.insertRow();

    const colunaDisciplina = linhaTabela.insertCell(0);
    const colunaTarefa = linhaTabela.insertCell(1);
    const colunaPrazo = linhaTabela.insertCell(2);

    colunaDisciplina.innerHTML = requisicao.disciplina;
    colunaTarefa.innerHTML = requisicao.descricao;
    colunaPrazo.innerHTML = formataData(requisicao.dataDeConclusao);

    //criando um input e dando à ele o tipo "checkbox"
    const marcaComoFeito = document.createElement('input');
    marcaComoFeito.type = 'checkbox';
    //Definindo checkboxes marcados
    marcaComoFeito.checked = requisicao.feito;
    // Definindo o id do checkbox
    marcaComoFeito.dataset.id = requisicao.id;

    // Ao clicar no checkbox, ativa e atualiza o campo FEITO
    marcaComoFeito.addEventListener('click', (element) => {
      // Pegando o alvo clicado
      let inputClicado = element.target;

      // "Marca como feito" percorrendo a lista de tarefas
      thisTarefas.forEach((tarefa) => {
        // Verifica se o id da tarefa é igual ao id do input clicado
        if(tarefa.id == inputClicado.dataset.id){
          tarefa.feito = inputClicado.checked;
        }
      });

      // Salve o array tarefas atualizado no localStorage
      localStorage_salvaTarefasEditadas(thisTarefas)

      // buscando os dados da lista novamente para atualizar em "tempo real"
      atualizaTabela(thisTarefas);

      // Exibe o total de requisições exceto as com "finalizado"
      atualizaTotalTarefas()
    });


    //Criando a coluna e inserindo o checkbox
    const colunaFeito = linhaTabela.insertCell(3);
    //inserir um elemento dentro de uma celula da tabela
    colunaFeito.appendChild(marcaComoFeito); // `marcaComoFeito` é o checkbox
    colunaFeito.classList.add('feito');

    //Atualizando progresso
    atualizaProgresso(linhaTabela, requisicao)

    // Adicionado botão "Remover" em cada linha da mesma maneira do checkbox
    const botaoRemover = document.createElement('button');
    const colunaRemover = linhaTabela.insertCell(5);

    botaoRemover.innerText = 'Remover';
    // Definindo `data-id` do botao remover
    botaoRemover.dataset.id = requisicao.id;
    colunaRemover.appendChild(botaoRemover);

    botaoRemover.classList.add('remover');

    // Ao clicar no botao "remover", ativa e remove a linha de id correspondente
    botaoRemover.addEventListener('click', () => {
      // Pegando o id do botao clicado
      let id = botaoRemover.dataset.id;

      // Removendo a tarefa da lista
      thisTarefas = thisTarefas.filter((tarefa) => {
        return tarefa.id != id;
      });

      // Salve o array tarefas atualizado no localStorage
      localStorage_salvaTarefas(thisTarefas)

      // Inicializa a lista de requisições na tabela da interface
      atualizaTabela(thisTarefas);

      // Exibe o total de requisições exceto as com "finalizado"
      atualizaTotalTarefas()
    });
  });
}

/**
 * Atualiza o span de progresso
 * @param linhaTabela linha da tabela
 * @param requisicao tarefa
 */
function atualizaProgresso(linhaTabela, requisicao) {
  // Coluna "Progresso"
  const colunaProgresso = linhaTabela.insertCell(4);
  let dataAtual = new Date()

  if (requisicao.feito) { // Verifica se está marcado como "Feito"
    const colunaFinalizado = document.createElement('span');
    colunaFinalizado.className = 'finalizado'; // Adiciona a classe "finalizado"
    colunaFinalizado.textContent = 'Finalizado';
    colunaProgresso.appendChild(colunaFinalizado);
  } else {
    const prazoData = new Date(requisicao.dataDeConclusao);
    if (prazoData < dataAtual) {
      const colunaAtraso = document.createElement('span');
      colunaAtraso.className = 'atrasado'; // Adiciona a classe "atrasado"
      colunaAtraso.textContent = 'ATRASADO!';
      colunaProgresso.appendChild(colunaAtraso);
    } else {
      const colunaAFazer = document.createElement('span');
      colunaAFazer.className = 'aFazer'; // Adiciona a classe "a fazer"
      colunaAFazer.textContent = 'A fazer';
      colunaProgresso.appendChild(colunaAFazer);
    }
  }
}

// Formata a data no formato "dd/mm/aa"
/**
 * Formata a data
 * @param data data atual
 * @returns dd/mm/aa
 */
function formataData(data) {
  const dataObj = new Date(data + 'T00:00:00');
  const dia = dataObj.getDate().toString().padStart(2, '0');
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0, então adicionamos 1
  const ano = dataObj.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
  return `${dia}/${mes}/${ano}`;
}
