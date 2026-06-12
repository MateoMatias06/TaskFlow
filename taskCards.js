const taskContainer = document.querySelector(".due-tasks");
let tasks = [];
let showingAll = false;

function renderTask(cantidad) {
    taskContainer.innerHTML = "";

    tasks.slice(0, cantidad).forEach(task => {
        const taskCard = document.createElement("article");
        taskCard.className = "task-card";

        let priorityClass = "";

        switch (task.priority) {
            case "HIGH":
                priorityClass = "high";
                break;
            case "MED":
                priorityClass = "medium";
                break;
            case "LOW":
                priorityClass = "low";
                break;
        }

        taskCard.innerHTML = `
            <div class="left">
                <input type="checkbox">
            </div>

            <div class="middle">
                <h3>${task.name}</h3>
                <p>Due Date: ${task.dueDate}</p>
                <p>Project: ${task.project}</p>
            </div>

            <div class="right">
                <span class="priority ${priorityClass}">
                    ${task.priority}
                </span>
            </div>
        `;

        taskContainer.appendChild(taskCard);
    });

    const button = document.createElement("button");
    button.className = "full-list";
    button.textContent = showingAll ? "Show Less" : "See Full List";

    taskContainer.appendChild(button);
}

fetch("dueSoon_data.json")
    .then(response => response.json())
    .then(data => {
        tasks = data;
        renderTask(4);
    });

taskContainer.addEventListener("click", event => {
    if (event.target.classList.contains("full-list")) {
        showingAll = !showingAll;
        renderTask(showingAll ? tasks.length : 4);
    }
});