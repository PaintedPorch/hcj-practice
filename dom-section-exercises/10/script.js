const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

let taskCounter = 0;

addTask.addEventListener("click", function() {
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = "<i class='fa-solid fa-check'>&#9745</li>";
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton)

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'>&#128465</li>";
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert("Please enter a task.");
    } else if (taskCounter <= 5) {
        taskContainer.appendChild(task);
        taskCounter++;
        console.log(taskCounter)
    } else {
        alert("Please delete one or more task before adding new ones.");
    }

    inputTask.value = "";

    checkButton.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
        deleteButton.style.textDecoration = "none";
        checkButton.style.textDecoration = "none";
    })

    deleteButton.addEventListener("click", function() {
        taskContainer.removeChild(task);
        taskCounter--;
        console.log(taskCounter);
    })
});