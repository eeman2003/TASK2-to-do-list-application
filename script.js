document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskListBtn = document.getElementById('taskListBtn');
    const deletedTaskBtn = document.getElementById('deletedTaskBtn');

    const addTaskDiv = document.getElementById('addTaskDiv');
    const taskListDiv = document.getElementById('taskListDiv');
    const deletedTaskDiv = document.getElementById('deletedTaskDiv');

    const taskForm = document.getElementById('taskForm');
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const taskList = document.getElementById('taskList');
    const deletedTaskList = document.getElementById('deletedTaskList');

    addTaskBtn.addEventListener('click', () => {
        showDiv(addTaskDiv);
    });

    taskListBtn.addEventListener('click', () => {
        showDiv(taskListDiv);
    });

    deletedTaskBtn.addEventListener('click', () => {
        showDiv(deletedTaskDiv);
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskTitle.value, taskDescription.value);
        taskForm.reset();
        showDiv(taskListDiv);
    });

    function showDiv(div) {
        addTaskDiv.classList.remove('active');
        taskListDiv.classList.remove('active');
        deletedTaskDiv.classList.remove('active');
        div.classList.add('active');
    }

    function addTask(title, description) {
        if (taskList.innerHTML === 'No Task') {
            taskList.innerHTML = '';
        }
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong><p>${description}</p><button class="deleteBtn">Delete</button>`;
        taskList.appendChild(li);
        updateTaskList();
        
        li.querySelector('.deleteBtn').addEventListener('click', () => {
            deleteTask(li);
        });
    }

    function deleteTask(taskItem) {
        if (deletedTaskList.innerHTML === 'No Task') {
            deletedTaskList.innerHTML = '';
        }
        taskItem.querySelector('.deleteBtn').remove();
        deletedTaskList.appendChild(taskItem);
        updateTaskList();
        updateDeletedTaskList();
    }

    function updateTaskList() {
        if (taskList.children.length === 0) {
            taskList.innerHTML = 'No Task';
        }
    }

    function updateDeletedTaskList() {
        if (deletedTaskList.children.length === 0) {
            deletedTaskList.innerHTML = 'No Task';
        }
    }

    // Initialize the application
    showDiv(taskListDiv);
    updateTaskList();
    updateDeletedTaskList();
});
