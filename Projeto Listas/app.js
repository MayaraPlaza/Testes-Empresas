const addTaskButton = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  const newTaskText = newTaskInput.value;
  if (newTaskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = newTaskText;
    taskList.appendChild(newTask);
    newTaskInput.value = "";
  }
});

/* 

Este código JavaScript adiciona um evento de clique ao botão com o ID "add-task-btn". Quando o botão é clicado, o texto inserido no campo de entrada com o ID "new-task" é obtido e armazenado na variável "newTaskText". Se o texto não estiver vazio, um novo elemento "li" é criado e seu conteúdo é definido como o texto digitado. O novo elemento "li" é adicionado como um filho do elemento com o ID "task-list". Finalmente, o valor do campo de entrada é definido como vazio. Em resumo, este código permite adicionar novas tarefas a uma lista de tarefas, quando o usuário clica em um botão.

- Selecionar elementos HTML usando o método getElementById().
- Adicionar eventos a elementos HTML usando o método addEventListener().
- Obter o valor de entrada de um campo de texto usando a propriedade value.
- Criar novos elementos HTML usando o método document.createElement().
- Definir o conteúdo de um elemento HTML usando a propriedade textContent.
- Adicionar elementos HTML como filhos de outros elementos HTML usando o método - appendChild().
- Limpar o valor de um campo de texto definindo a propriedade value como uma string vazia.

*/