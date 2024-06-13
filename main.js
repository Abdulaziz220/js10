// const todoInput = document.querySelector(".todo-input")
// const todoBtn = document.querySelector(".todo-btn")
// const todoList = document.querySelector(".todo-list")

// todoBtn.addEventListener("click", addTodo);

// function addTodo(event) {
//     event.preventDefault();

//     const todoDiv = document.createElement("div")
//     todoDiv.classList.add("todo")
//     const newTodo = document.createElement("li")
//     newTodo.innerHTML = todoInput.value
//     newTodo.classList.add("todo-item")
//     todoDiv.appendChild(newTodo)

//     const btnCheck = document.createElement("button")
//     btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
//     btnCheck.classList.add("check-btn")
//     todoDiv.appendChild(btnCheck)

//     const btnTesht = document.createElement("button")
//     btnTesht.innerHTML = '<i class="fa-solid fa-trash"></i>'
//     btnTesht.classList.add("trash-btn")
//     todoDiv.appendChild(btnTesht)

//     todoList.appendChild(btnCheck)


// }


let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-btn");
let todoList = document.querySelector(".todo-list");


todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    let todoDiv = document.createElement("div");

    todoDiv.style.marginTop = "30px"

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    todoDiv.appendChild(check);
    check.style.width = "20px"
    check.style.height = "20px"
    check.style.borderRadius = "30px"

    let text = document.createElement("li");
    text.innerHTML = todoInput.value;
    text.style.color = "black"
    text.style.listStyleType = "none"
    text.style.fontSize = "20px"
    todoDiv.appendChild(text)

    let btnTrash = document.createElement("button");
    btnTrash.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    btnTrash.style.border = "none"
    btnTrash.style.marginLeft = "120px"
    todoDiv.appendChild(btnTrash);
    todoList.appendChild(todoDiv)
    todoDiv.style.width = "455px"
    todoDiv.style.marginInline = "auto"
    todoDiv.style.display = "flex"
    todoDiv.style.justifyContent = "center"
    todoDiv.style.alignItems = "center"
    todoDiv.style.gap = "10px"

    btnTrash.addEventListener("click", function trash(event) {
        todoDiv.remove();
    })


}