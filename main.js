const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")

todoBtn.addEventListener("click", addTodo);

function addTodo (event) {
    event.preventDefault();

    const todoDiv = document.createElement("div")

    const newTodo = document.createElement("li")
    newTodo.innerHTML = todoInput.value
  
    todoDiv.appendChild(newTodo)

    const btnCheck = document.createElement("button")
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(btnCheck)

    const btnTesht = document.createElement("button")
    btnTesht.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(btnTesht)

    todoList.appendChild(todoDiv)
}