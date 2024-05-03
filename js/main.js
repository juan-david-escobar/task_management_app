const tasks = [];

function logIn() { };

function logOut() { };

function editProfile() { };

function addNewTask(name, details, priority, dueDate) {
      const task = {
            name: name,
            details: details,
            priority: priority,
            dueDate: dueDate
      }
      tasks.push(task);
};

function asignPriority() { };

function asignDueDate() { };

function markTaskAsCompleted() { };

function deleteTasks() { };

function displayTasks() {
      for (const task of tasks) {
            alert("Name: " + task.name + "; details: " + task.details + "; priority: " + task.priority + "; Due Date: " + task.dueDate)
      }
};

addNewTask("Clean House", "Sweep, mop and dust. Then, clean up room.", "Low", "03/05/2024");
addNewTask("Create schedule", "Create a schedule to study JavaScript", "High", "04/05/2024");

displayTasks();
console.log(tasks);
