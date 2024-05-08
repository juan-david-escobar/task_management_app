const tasks = [];

while (true) {
  const newTask = confirm("¿Quiere ingresar una nueva tarea?");

  if (newTask) {
    const newTaskName = prompt("Ingrese el nombre de la tarea:");
    const newTaskDetails = prompt("ingrese los detalles de la tarea:");
    const newTaskCompleted = confirm("¿La tarea está completada?");

    const task = {
      name: newTaskName,
      details: newTaskDetails,
      completed: newTaskCompleted,
    };

    tasks.push(task);

    alert("La tarea ha sido agregada con éxito");
  } else {
    alert("gracias!");
    break;
  }
}

console.log(tasks);
