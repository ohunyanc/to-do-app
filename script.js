const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
  alert("Add button clicked!");
}

const clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
  const completedItems = toDoList.getElementsByClassName("completed")
  
  while (completedItems.length > 0){
    completedItems.item(0).remove();
  }
  alert("Clear button clicked!");
}

const emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
function emptyList() {
  const toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
    alert("Empty button clicked!");
  }
}  

const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
function saveList() {
  const toDos = [];
  
  for (var i = 0; i < toDoList.children.length; i++) {
    const toDo = toDoList.children.item(i);
    
    const toDoInfo = {
      "task": toDo.innerText,
      "completed": toDo.classList.contains("completed")
    };
    
    toDos.push(toDoInfo);
  }
  alert("save button clicked!");
  
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
  if (localStorage.getItem("toDos") != null) {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    
    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      newToDoItem(toDo.task, toDo.completed);
    }
  }
}

const toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
function newToDoItem(itemText, completed) {
  const toDoItem = document.createElement("li");
  const toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);
  
  if (completed) {
    toDoItem.classList.add("completed");
  }
  
  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
  const itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

