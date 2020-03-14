document.addEventListener("DOMContentLoaded", () => {

  function addTask(item, priority) {
    let newTask = document.createElement('li');
    newTask.innerHTML = `${item} <button>X</button>`;
    newTask.className = priority;
    appendToList(newTask, priority);
  }

  function appendToList (task, priority) {
    const ul = document.getElementById(priority);
    ul.appendChild(task);
    task.querySelector("button").addEventListener("click", function(){
      ul.removeChild(task);
    })
  }
  
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskToAdd = event.target["new-task-description"].value;
    const priority = event.target["priority"].value;
    addTask(taskToAdd, priority);
    document.getElementById("new-task-description").value = "";
  })

});
