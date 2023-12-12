# Planner de Estudos

## Sobre o projeto

O Projeto "Planner de Estudos" é uma aplicação web para gerenciar tarefas de forma eficiente. Ele foi desenvolvido para ajudar as pessoas estudantes a manterem o controle de suas atividades diárias, prioridades e progresso.

## Arquivos no projeto

#### HTML5
- **`index.html`**: página principal de conteúdo do projeto.

#### CSS3
- **`style.css`**: define a aparência da aplicação, cores e efeitos de transição dos botões e o estilo das novas tarefas a serem adicionadas com JavaScript

#### JavaScript
- **`disciplina.js`**: determina uma lista de disciplinas de forma dinâmica, para todos os seletores da página.

- **`tabela.js`**: desenha os itens da tabela, utilizando métodos como **forEach** e **Date**, formata a data do prazo e verifica status do progresso.

- **`localStorage.js`**: captura os dados da tabela, armazena e atualiza-os em Local Storage.

- **`adicionar.js`**: captura os dados do formulário e adiciona uma nova requisição à lista.

- **`filtrar.js`**: cria um filtro por disciplinas utilizando o método **filter**.

- **`ordenar.js`**: ordena as requisições por data (prazo) utilizando o método **sort**.

- **`total.js`**: exibe o número total de tarefas a fazer utilizando o método **reduce**. Quando aplicado algum filtro, este script exibe o total referente à disciplina filtrada.


## Como Usar

1. Abra o arquivo `index.html` em um navegador web ou clique no [link do projeto](https://planner-de-estudos.vercel.app)
2. Preencha os campos do formulário à direita e clique no botão **Adicionar** para inserir uma nova tarefa.
3. Na tabela, você pode marcar no seletor *checkbox* as tarefas que já finalizou, e observar quais tarefas encontram-se *no prazo* ou *atrasadas*.
4. Utilize os botões à direita para **filtrar**, **ordenar** e visualizar o **total** de tarefas a fazer.
2. Se quiser **remover** alguma tarefa, é só clicar no botão vermelho `remover` e ela será apagada do seu armazenamento.

## Notas e Créditos

Deixo aqui meus agradecimentos ao **time de Conteúdo da Alura Start**, Guilherme Silveira, Fabrizio Feitosa e todas as demais pessoas envolvidas. Foi um momento único de aprendizado, uma experiência enriquecedora e memorável!
