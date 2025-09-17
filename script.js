// Open Sidebar
function openSidebar() {
  const openButton = document.querySelector(".sidebar");
  const appear = document.querySelectorAll(".appear");
  const appeartheme = document.querySelector(".appear-theme");
  const inputBar = document.querySelector(".container-myday");
  const imp_bar = document.querySelector(".container-important");
  const plan_bar = document.querySelector(".container-planned");
  const proj_bar = document.querySelector(".container-project");
  const task_bar = document.querySelector(".container-task");
  const onThisButton = document.querySelectorAll(".onThis");

  proj_bar.classList.toggle("open");
  plan_bar.classList.toggle("open");
  imp_bar.classList.toggle("open");
  task_bar.classList.toggle("open");
  inputBar.classList.toggle("open");
  appeartheme.classList.toggle("non");
  openButton.classList.toggle("open");
  appear.forEach((item) => {
    item.classList.toggle("non");
  });
  onThisButton.forEach((item) => {
    item.classList.toggle("open");
  });
}

// Change Theme
function changeTheme() {
  const Tcontainer = document.querySelector(".theme-container");
  const Tbutton = document.querySelector(".theme-button");
  const Tsidebar = document.querySelector(".sidebar");
  const Tinputbar = document.querySelector(".input-todo-list");
  const alllistBar = document.querySelectorAll(".main-list");
  const Timpbar = document.querySelector(".input-imp-list");
  const Timpmain = document.querySelectorAll(".imp-main-list");
  const Tplanbar = document.querySelector(".input-planned-list");
  const Tplanmain = document.querySelectorAll(".planned-main-list");
  const Tprojbar = document.querySelector(".input-project-list");
  const Tprojmain = document.querySelectorAll(".project-main-list");
  const Ttaskbar = document.querySelector(".input-task-list");
  const Ttaskmain = document.querySelectorAll(".task-main-list");
  const Tboxdetails = document.querySelectorAll(".box-details");

  Ttaskbar.classList.toggle("dark");
  Tprojbar.classList.toggle("dark");
  Tplanbar.classList.toggle("dark");
  Tinputbar.classList.toggle("dark");
  Tcontainer.classList.toggle("dark");
  Tbutton.classList.toggle("dark");
  Tsidebar.classList.toggle("dark");
  Timpbar.classList.toggle("dark");

  Timpmain.forEach((ListBar) => {
    ListBar.classList.toggle("dark");
  });
  alllistBar.forEach((ListBar) => {
    ListBar.classList.toggle("dark");
  });
  Tplanmain.forEach((ListBar) => {
    ListBar.classList.toggle("dark");
  });
  Tprojmain.forEach((ListBar) => {
    ListBar.classList.toggle("dark");
  });
  Ttaskmain.forEach((ListBar) => {
    ListBar.classList.toggle("dark");
  });
  Tboxdetails.forEach((item) => {
    item.classList.toggle("dark");
  });
}

// Date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const tanggal = new Date();
const currentDate = tanggal.toLocaleDateString("id-ID", options);
document.getElementById("date").innerText = currentDate;
document.getElementById("date-imp").innerText = currentDate;
document.getElementById("date-plan").innerText = currentDate;
document.getElementById("date-project").innerText = currentDate;
document.getElementById("date-task").innerText = currentDate;

// Trigger //
const inputBox = document.querySelector(".input-todo-list");
const todoListContainer = document.querySelectorAll(".todo-list");

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const taskText = inputBox.value.trim();

    if (taskText !== "") {
      createNewList(taskText);
      inputBox.value = "";
    }
  }
});

// Create New List My day //
function createNewList(text) {
  todoListContainer.forEach((container) => {
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newSpan = document.createElement("span");

    newLi.classList.add("main-list");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("submit-list");
    newSpan.textContent = text;

    // Check for Theme //
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("dark")) {
      newLi.classList.add("dark");
    }

    newLi.appendChild(newCheckbox);
    newLi.appendChild(newSpan);
    container.appendChild(newLi);
  });

  console.log("Add New Task");
}

// Trigger //
const inputimpbox = document.querySelector(".input-imp-list");
const impListContainer = document.querySelectorAll(".imp-list");

inputimpbox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const taskimpText = inputimpbox.value.trim();
    if (taskimpText !== "") {
      createNewListImp(taskimpText);
      inputimpbox.value = "";
    }
  }
});

// Create New List Important //
function createNewListImp(text) {
  impListContainer.forEach((container) => {
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newSpan = document.createElement("span");

    newLi.classList.add("imp-main-list");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("submit-imp-list");
    newSpan.textContent = text;

    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("dark")) {
      newLi.classList.add("dark");
    }

    newLi.appendChild(newCheckbox);
    newLi.appendChild(newSpan);
    container.appendChild(newLi);
  });
  console.log("Add New Important Task");
}

// Trigger //
const inputplanbox = document.querySelector(".input-planned-list");
const planListContainer = document.querySelectorAll(".planned-list");

inputplanbox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const taskplanText = inputplanbox.value.trim();
    if (taskplanText !== "") {
      createNewListPlan(taskplanText);
      inputplanbox.value = "";
    }
  }
});

// Create New List Planned //
function createNewListPlan(text) {
  planListContainer.forEach((container) => {
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newSpan = document.createElement("span");

    newLi.classList.add("planned-main-list");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("submit-planned-list");

    newSpan.textContent = text;

    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("dark")) {
      newLi.classList.add("dark");
    }
    newLi.appendChild(newCheckbox);
    newLi.appendChild(newSpan);
    container.appendChild(newLi);
  });
  console.log("Add New Plan");
}

// trigger //
const inputProjectList = document.querySelector(".input-project-list");
const projectListContainer = document.querySelectorAll(".project-list");

inputProjectList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const taskproject = inputProjectList.value.trim();
    if (taskproject !== "") {
      createNewListProj(taskproject);
      inputProjectList.value = "";
    }
  }
});

// Create New List Project //
function createNewListProj(text) {
  projectListContainer.forEach((container) => {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newCheckbox = document.createElement("input");

    newLi.classList.add("project-main-list");
    newCheckbox.type = "checkbox";

    newCheckbox.classList.add("submit-project-list");
    newSpan.textContent = text;

    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("dark")) {
      newLi.classList.add("dark");
    }
    newLi.appendChild(newCheckbox);
    newLi.appendChild(newSpan);
    container.appendChild(newLi);
  });

  console.log("Add New Project");
}

// Trigger //
const inputTaskBar = document.querySelector(".input-task-list");
const taskListMain = document.querySelector(".task-list");

inputTaskBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const mainTask = inputTaskBar.value.trim();
    if (mainTask !== "") {
      createNewTask(mainTask);
      inputTaskBar.value = "";
    }
  }
});

// Create New Task List //
function createNewTask(text) {
  const newLi = document.createElement("li");
  const newCheckbox = document.createElement("input");
  const newSpan = document.createElement("span");

  newLi.classList.add("task-main-list");
  newCheckbox.classList.add("submit-task-list");

  newCheckbox.type = "checkbox";
  newSpan.textContent = text;

  const sidebar = document.querySelector(".sidebar");
  if (sidebar.classList.contains("dark")) {
    newLi.classList.add("dark");
  }

  newLi.appendChild(newCheckbox);
  newLi.appendChild(newSpan);
  taskListMain.appendChild(newLi);
  console.log("Add New Task");
}

// Sidebar Content Myday //
function appearMyday() {
  const Onmyday = document.querySelector(".container-myday");
  const OnImp = document.querySelector(".container-important");
  const OnPlan = document.querySelector(".container-planned");
  const OnProj = document.querySelector(".container-project");
  const OnTask = document.querySelector(".container-task");

  Onmyday.classList.add("on");
  OnProj.classList.remove("on");
  OnImp.classList.remove("on");
  OnPlan.classList.remove("on");
  OnTask.classList.remove("on");
  document.body.style.backgroundImage =
    "url(/To-Do-List/Picture/Background-My-Day.png)";
}

// Sidebar Content Important //
function appearImp() {
  const OnImp = document.querySelector(".container-important");
  const Onmyday = document.querySelector(".container-myday");
  const OnPlan = document.querySelector(".container-planned");
  const OnProj = document.querySelector(".container-project");
  const OnTask = document.querySelector(".container-task");

  OnImp.classList.add("on");
  Onmyday.classList.remove("on");
  OnProj.classList.remove("on");
  OnPlan.classList.remove("on");
  OnTask.classList.remove("on");
  document.body.style.backgroundImage =
    "url(/To-Do-List/Picture/Background-Important.png)";
}

// Sidebar Content Planned //
function appearPlan() {
  const OnPlan = document.querySelector(".container-planned");
  const OnImp = document.querySelector(".container-important");
  const Onmyday = document.querySelector(".container-myday");
  const OnProj = document.querySelector(".container-project");
  const OnTask = document.querySelector(".container-task");

  OnPlan.classList.add("on");
  OnImp.classList.remove("on");
  Onmyday.classList.remove("on");
  OnProj.classList.remove("on");
  OnTask.classList.remove("on");
  document.body.style.backgroundImage =
    "url(/To-Do-List/Picture/Background.png)";
}

// sidebar Content Project //
function appearProject() {
  const Onmyday = document.querySelector(".container-myday");
  const OnImp = document.querySelector(".container-important");
  const OnPlan = document.querySelector(".container-planned");
  const OnProj = document.querySelector(".container-project");
  const OnTask = document.querySelector(".container-task");

  OnProj.classList.add("on");
  Onmyday.classList.remove("on");
  OnImp.classList.remove("on");
  OnPlan.classList.remove("on");
  OnTask.classList.remove("on");
  document.body.style.backgroundImage =
    "url(/To-Do-List/Picture/Background-Project.png)";
}

// Sidebar Content Task //
function appearTask() {
  const Onmyday = document.querySelector(".container-myday");
  const OnImp = document.querySelector(".container-important");
  const OnPlan = document.querySelector(".container-planned");
  const OnProj = document.querySelector(".container-project");
  const OnTask = document.querySelector(".container-task");

  OnTask.classList.add("on");
  OnProj.classList.remove("on");
  Onmyday.classList.remove("on");
  OnImp.classList.remove("on");
  OnPlan.classList.remove("on");
  document.body.style.backgroundImage =
    "url(/To-Do-List/Picture/Background-Task.png)";
}
