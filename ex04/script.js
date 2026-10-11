const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateCount() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
        span.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    deleteButton.onclick = function () {
        li.remove();
        updateCount();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

addButton.onclick = addTask;

taskInput.onkeydown = function (event) {
    if (event.key === "Enter") {
        addTask();
    }
};