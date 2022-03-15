//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delCheck);

//functions
function addTodo(event) {
  //prevent load
  event.preventDefault();
  if (todoInput.value === "") {
  } else {
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //add div to ul
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
}

function delCheck(event) {
  const item = event.target;
  if (item.classList[0] === "delete-btn") {
    const del = item.parentElement;
    del.remove();
  }
  if (item.classList[0] === "completed-btn") {
    const comp = item.parentElement;
    comp.classList.toggle("completed");
  }
}
