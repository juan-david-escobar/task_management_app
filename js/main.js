const tasks = [];

while (true) {
  const actionSelected = prompt(
    "Para agregar tarea = '1'; para ver tareas = '2'; para salir haga click en 'cancelar'"
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
    tasks.forEach((element) => {
      alert(
        `Nombre task 1: ${tasks[0].name}, Details task 1: ${tasks[0].details}, Completed?: ${tasks[0].completed}`
      );
    });
  }
}
