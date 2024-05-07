const tasks = [];

function addNewTask(id, name, details, priority, dueDate) {
  const task = {
    id: id,
    name: name,
    details: details,
    priority: priority,
    dueDate: dueDate,
  };
  tasks.push(task);
}

function asignPriority(priority) {
  tasks.push(task.priority);
}

function asignDueDate() {}

function markTaskAsCompleted() {}

function deleteTasks() {}

function displayTasks() {
  for (const task of tasks) {
    alert(
      "ID: " +
        task.id +
        "; Name: " +
        task.name +
        "; details: " +
        task.details +
        "; priority: " +
        task.priority +
        "; Due Date: " +
        task.dueDate
    );
  }
}

addNewTask(
  "001",
  "Finish the project",
  "Testing Details 1. Details added.",
  "Low",
  "03/05/2024"
);
addNewTask(
  "002",
  "Create schedule",
  "Testing Details 2. More details added",
  "High",
  "04/05/2024"
);

displayTasks();
console.log(tasks);
