const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.closest('li');
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== li.id);
    saveToDos();
}

function changeToDo(event) {
    const li = event.target.closest('li');
    const elem = toDos.findIndex(toDo => toDo.id == li.id);
    if (event.target.checked) {
        toDos[elem].state = "done";
    } else {
        toDos[elem].state = "";
    }
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const check = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDoObj.id;

    check.type = "checkbox";
    
    check.addEventListener("change", changeToDo);

    span.innerText = newToDoObj.text;

    li.appendChild(check);
    if (newToDoObj.state == "done") {
        check.checked = true;
        console.log("checked");
    }
    
    button.classList.add("icon-button");
    button.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function onToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: `todo-${Date.now()}`,
        state : "",
    };
    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
}

const toDoToggle = document.querySelector("#todo > button");
const toDoPanel = document.querySelector("#todo-panel");

function handleClick(event) {
    if (toDoPanel.classList.contains(ACTIVE_CLASSNAME) ) {
        toDoPanel.classList.remove(ACTIVE_CLASSNAME);
        setTimeout(function(){ toDoPanel.classList.add(HIDDEN_CLASSNAME)},500);
    } else {
        toDoPanel.classList.remove(HIDDEN_CLASSNAME);
        setTimeout(function(){ toDoPanel.classList.add(ACTIVE_CLASSNAME)},50);
    }
}

toDoToggle.addEventListener("click", handleClick);
