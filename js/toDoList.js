document.addEventListener("DOMContentLoaded", () => {
    loadTasks(); 
    document.getElementById('addTaskBtn').addEventListener('click', handleSaveTask);
});

let tasks = [];
let editTaskId = null; 

function handleSaveTask() {
    if (editTaskId) {
        updateTask(); 
    } else {
        addTask(); 
    }
}

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
    tasks.sort((a, b) => a.priority - b.priority); 

    saveTasks(); 
    renderTasks();
    clearForm();
}

function renderTasks() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item', 'd-flex', 'justify-content-between', 'align-items-center', 'contact-item');
        taskDiv.innerHTML = `
            <div class="task-list" onclick="populateForm(${task.id})">
                <p class="task-text">${task.description} <span class="priority badge bg-${task.priority === 1 ? 'danger' : 'secondary'}">${task.priority === 1 ? 'Alto' : 'Bajo'}</span></p>
            </div>

            <div>
                <button class="btn btn-danger btn-sm delete-btn" onclick="deleteTask(${task.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(); 
    renderTasks();
}

function populateForm(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('floatingInputGrid').value = task.description;
    document.getElementById('floatingSelectGrid').value = task.priority;
    editTaskId = id;
    document.getElementById('addTaskBtn').innerText = "Guardar Cambios"; 
}

function updateTask() {
    const taskInput = document.getElementById('floatingInputGrid').value.trim();
    const priority = document.getElementById('floatingSelectGrid').value;

    if (taskInput === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    const taskIndex = tasks.findIndex(task => task.id === editTaskId);
    tasks[taskIndex].description = taskInput;
    tasks[taskIndex].priority = parseInt(priority);

    saveTasks();
    renderTasks();
    clearForm(); 
}

function clearForm() {
    document.getElementById('floatingInputGrid').value = '';
    document.getElementById('floatingSelectGrid').value = '1';
    document.getElementById('addTaskBtn').innerText = "Agregar Tarea";
    editTaskId = null; 
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks'); 
    if (storedTasks) {
        tasks = JSON.parse(storedTasks); 
        renderTasks(); 
    }
}
