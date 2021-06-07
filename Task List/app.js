// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



loadEventListeners = () => {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task
    form.addEventListener('submit', addTask);
    // Remove task
    taskList.addEventListener('click', removeTask);
    // Clear task
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks);

}

getTasks = () => {
    let tasks;
    localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);

        taskList.appendChild(li);
    });

};

addTask = (e) => {

    taskInput.value === '' ? alert('Add a Task') : taskInput.value;

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';

    e.preventDefault();
};

storeTaskInLocalStorage = (task) => {

    let tasks;
    localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

};

removeTask = (e) => {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }

    // Remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);

};

removeTaskFromLocalStorage = (taskItem) => {

    let tasks;
    localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach((task, index) => {
        taskItem.textContent === task ? tasks.splice(index, 1) : null;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))

};

clearTasks = (e) => {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    };

    clearTasksFromLocalStorage();
};

clearTasksFromLocalStorage = () => {

    localStorage.clear();
    
}

filterTasks = (e) => {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        item.toLowerCase().indexOf(text) != -1 ? task.style.display = 'block' : task.style.display = 'none';
    });


};


// Load event listeners

loadEventListeners();