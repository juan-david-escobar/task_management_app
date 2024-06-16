// Get references to elements
const taskList = document.getElementById("taskList");
const taskNameInput = document.getElementById("taskName");
const taskDetailsInput = document.getElementById("taskDetails");
const addButton = document.getElementById("addButton");

// Load tasks from local storage (or initialize empty array)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load initial tasks from JSON file
fetch("tasks.json")
  .then((response) => response.json())
  .then((initialTasks) => {
    tasks = tasks.concat(initialTasks); // Combine initial and stored tasks
    renderTasks();
  });

// Function to render tasks in the table
function renderTasks() {
  taskList.innerHTML = ""; // Clear the table

  tasks.forEach((task) => {
    const row = taskList.insertRow();
    row.insertCell().textContent = task.id;
    row.insertCell().textContent = task.name;
    row.insertCell().textContent = task.details;
    row.insertCell().textContent = task.completed ? "Yes" : "No";

    // Actions cell (edit/delete buttons)
    const actionsCell = row.insertCell();
    actionsCell.innerHTML = `
      <button onclick="editTask(${task.id})" class="container_input_button">Edit</button>
      <button onclick="deleteTask(${task.id})" class="container_input_button">Delete</button>
    `;
  });
}

// Function to add a new task
function addTask() {
  const name = taskNameInput.value.trim();
  const details = taskDetailsInput.value.trim();
  if (name && details) {
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
      name,
      details,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskNameInput.value = "";
    taskDetailsInput.value = "";
  } else {
    alert("Please enter both task name and details.");
  }
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to edit a task
function editTask(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const updatedDetails = prompt(
      "Enter new task details:",
      tasks[taskIndex].details
    );
    if (updatedDetails !== null) {
      tasks[taskIndex].details = updatedDetails.trim();
      saveTasks();
      renderTasks();
    }
  }
}

// Function to delete a task
function deleteTask(taskId) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks();
    renderTasks();
  }
}

// Event listeners
addButton.addEventListener("click", addTask);

// Initial rendering of tasks
renderTasks();
