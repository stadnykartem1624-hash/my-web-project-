let tasks = [];

const input = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-task');
const list = document.querySelector('#task-list');

// Save state
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load state
function loadTasks() {
  const data = localStorage.getItem('tasks');
  if (data) {
    tasks = JSON.parse(data);
  }
}

// Render UI
function renderTasks() {
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    const text = document.createElement('span');
    text.textContent = task.text;

    const btn = document.createElement('button');
    btn.textContent = 'X';

    btn.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(text);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Add task
addBtn.addEventListener('click', () => {
  const value = input.value.trim();

  if (value === '') return;

  tasks.push({ text: value });

  saveTasks();
  renderTasks();

  input.value = '';
});

// Init app
loadTasks();
renderTasks();