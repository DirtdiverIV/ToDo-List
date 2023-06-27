let todos = [
    { nombre: "gatomon", id: 1 },
    { nombre: "nube", id: 2 }
  ];
  
  function addTodo() {
    let inputValue = document.getElementById("todoInput").value;
    todos.push({ nombre: inputValue, id: todos.length + 1 });
    document.getElementById("todoInput").value = "";
    showTodos();
  }
  
  function showTodos() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";
  
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i];
  
      let div = document.createElement('div');
      div.classList.add('todo-item');
  
      let li = document.createElement('li');
      li.textContent = todo.nombre;
  
      let buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons-div');
  
      let modifyButton = document.createElement('button');
      modifyButton.textContent = 'Modificar';
      modifyButton.classList.add('modify-button');
      modifyButton.addEventListener('click', function() {
        modifyTodoById(todo.id);
      });
  
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Borrar';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', function() {
        deleteTodoById(todo.id);
      });
  
      buttonsDiv.appendChild(modifyButton);
      buttonsDiv.appendChild(deleteButton);
  
      div.appendChild(li);
      div.appendChild(buttonsDiv);
  
      list.appendChild(div);
    }
  }
  
  function modifyTodoById(id) {
    // Aqui tengo que anadir la logica del boton
    console.log("Modificar elemento con ID:", id);
  }
  
  function deleteTodoById(id) {
    // Aqui tengo que anadir la logica del boton
    console.log("Borrar elemento con ID:", id);
  }
  
  document.getElementById('addButton').addEventListener('click', function(event) {
    event.preventDefault();
    addTodo();
  });
  
  window.onload = showTodos;

