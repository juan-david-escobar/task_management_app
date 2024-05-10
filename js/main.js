const tasks = [];

while (true) {
  const actionSelected = prompt(
    "Agregar tarea = '1' || Ver tareas = '2' || Salir = 'cancelar'"
  );

  if (actionSelected === "1") {
    const name = prompt("Ingrese el nombre de la tarea:");
    const details = prompt("ingrese los detalles de la tarea:");
    const completed = confirm("¿La tarea está completada?");

    const task = {
      name: name,
      details: details,
      completed: completed,
    };

    tasks.push(task);

    alert("La tarea ha sido agregada con éxito");
  }

  if (actionSelected === "2") {
    tasks.forEach((task) => {
      alert(
        `Nombre task: ${task.name}, Details task: ${task.details}, Completed?: ${task.completed}`
      );
    });
  }

  if (actionSelected === null) {
    break;
  }
}
