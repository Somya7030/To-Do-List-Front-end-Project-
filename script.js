let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  // li container
  let li = document.createElement("li");

  // create checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // task text
  let span = document.createElement("span");
  span.textContent = taskText;

  // toggle completed on checkbox change
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }
  });

  // remove button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove";
  removeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  // append in li
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
