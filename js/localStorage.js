// * Todas as funções relacionadas ao LocalStorage

/**
 * Pegando o valor do Local Storage e já decodificando
 * @return array Tarefas
 */
function localStorage_pegaTarefas() {
    // Busca a listagem que está no formato de string
    let dadosArmazenados = localStorage.getItem('tarefas');

    // Se não há dados no localStorage, retorna um array vazio
    if (!dadosArmazenados) {
        return [];
    }

    // Inicia uma variável que vai transformar a lista armazenada de string para lista de objeto
    let transformaStringParaListagem = JSON.parse(dadosArmazenados);

    // Se não for um array, cria um array com o item do localStorage
    if (!Array.isArray(transformaStringParaListagem)) {
        transformaStringParaListagem = [];
    }

    // Retorna a lista encontrada e transformada em objeto
    return transformaStringParaListagem;
}

/**
 * Salvando valor no Local Storage e já codificando
 * @param array lista de tarefas
 */
function localStorage_salvaTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

/**
 * Salvando valor no Local Storage e já codificando quando editado
 * @param array lista de tarefas editadas
 */
function localStorage_salvaTarefasEditadas(tarefasEditadas) {
    // Primeiro pega as tarefas atuais
    let tarefasAtuais = localStorage_pegaTarefas();

    // Mescla as tarefas atuais com as novas quando os ids forem iguais
    let tarefasMescladas = tarefasAtuais.map((tarefaAtual) => {
        // Busca a tarefa atual na lista de tarefasEditadas
        let tarefaEncontrada = tarefasEditadas.find((tarefa) => {
            // Retornando para o find
            return tarefa.id === tarefaAtual.id;
        });

        // Se não encontrar a tarefa, retorna a tarefa atual
        if (!tarefaEncontrada) {
            return tarefaAtual;
        }

        // Retorna a tarefa encontrada
        return tarefaEncontrada;
    });

    // Salva no localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefasMescladas));
}

/**
 * Adicionando nova tarefa no Local Storage
 * @param arrayData lista de dados
 */
function localStorage_addNovaTarefa(arrayData) {
    // Array padrão
    let arrayDataDefault = {
        "disciplina": "Outro",
        "descricao": "Nota sem descrição",
        "dataDeConclusao": new Date(),
        "feito": false,
        "id": localStorage_criaId(),
    }

    // Mescla dos arrays
    let arrayFinal = Object.assign(arrayDataDefault, arrayData)

    // Adicionando ou criando Local Storage
    if (localStorage.getItem("tarefas") !== null) {
        // Capturando o valor do Local Storage
        let tarefas = JSON.parse(localStorage.getItem("tarefas"))
        tarefas.push(arrayFinal)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    } else {
        // Criando um novo valor vazio
        localStorage.setItem("tarefas", JSON.stringify([arrayFinal]))
    }
}

/**
 * Criando um identificador para cada linha adicionada
 * @returns id criado
 */
function localStorage_criaId() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}