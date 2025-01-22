document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('addTaskBtn').addEventListener('click', addTask);
});

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('floatingInputGrid').value.trim();
    const priority = document.getElementById('floatingSelectGrid').value;

    if (taskInput === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    const task = {
        id: Date.now(),
        description: taskInput,
        priority: parseInt(priority)
    };

    tasks.push(task);
    tasks.sort((a, b) => a.priority - b.priority); // Ordenar tareas por prioridad

    renderTasks();
    document.getElementById('floatingInputGrid').value = ''; // Limpiar el campo
}

function renderTasks() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = ''; // Limpiar la lista antes de renderizar

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item', 'd-flex', 'justify-content-between', 'align-items-center', 'contact-item');
        taskDiv.innerHTML = `

            <div class="task-list">
                <p class="task-text mt-5">${task.description} <span class="priority badge bg-${task.priority === 1 ? 'danger' : 'secondary'}">${task.priority === 1 ? 'Alto' : 'Bajo'}</span></p>
            </div>

            <div>
                <button class="btn btn-warning btn-sm edit-btn" onclick="editTask(${task.id})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm delete-btn" onclick="deleteTask(${task.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id); // Filtrar la tarea eliminada
    renderTasks(); // Volver a renderizar
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newDescription = prompt("Edita la tarea:", task.description);
    if (newDescription && newDescription.trim() !== "") {
        task.description = newDescription.trim();
        renderTasks();
    }
}
