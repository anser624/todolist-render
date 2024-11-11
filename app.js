var idCount = 0;
var todos = [];

function addTodo() {
    var inpVal = document.getElementById('inp');

    if (inpVal.value.trim() === "") {
        alert("Please add a Todo Task!");
        return;
    }

    todos.push({
        id: idCount,
        title: inpVal.value
    });

    render();
    inpVal.value = "";
}

function render() {
    var todoElem = document.getElementById('todos');
    todoElem.innerHTML = "";

    for (var i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        var textElem = document.createElement('p');
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        textElem.textContent = todos[i].title;

        elem.setAttribute("id", todos[i].id);
        elem.setAttribute("class", "todo");

        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`);
        updateButton.setAttribute("onclick", `updateTodoPrompt(${todos[i].id})`);

        elem.appendChild(textElem);
        elem.appendChild(deleteButton);
        elem.appendChild(updateButton);

        todoElem.appendChild(elem);
    }
    idCount++;
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function updateTodoPrompt(id) {
    var newTitle = prompt("Update the todo:", todos.find(todo => todo.id === id).title);
    if (newTitle && newTitle.trim() !== "") {
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.title = newTitle;
            }
            return todo;
        });
        render();
    } else {
        alert("Updated Todo cannot be empty!");
    }
}
