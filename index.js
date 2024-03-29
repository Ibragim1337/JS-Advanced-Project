let createTaskButton = document.querySelector(".create-btn");
let hiddenMenu = document.querySelector(".main-task-container");
let closeButton = document.querySelector(".close-btn");
let body = document.querySelector("body");
const tasksList = document.querySelector("#tasksList");
const nameError = document.querySelector('.nameError');
const descError = document.querySelector('.descError');
const regex = /^((\p{L}|\d)+(\s(\p{L}|\d)+)*){2,16}$/u;

let tasks = [];

//получаем данные из localStorage 

if(localStorage.getItem('tasks')){
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

//вносим данные на страницу 

tasks.forEach(function(task){
  const taskHTML = `<div class="task" id='${task.id}'>
                      <div class="visible">
                        <p class="task-p">${task.taskName}</p>
                        <p class="status-p">
                          Статус задачи:
                          <small class="status"
                             >Выполнен
                         <input
                             class="status-input"
                            type="checkbox"
                            id="statusInput"
                                        /></small>
                        </p>
                        <button class="description-btn" type="button" data-action="showmore">
                            Подробнее про задачу
                          </button>
                        <button class="edit-btn" type="button" >
                             Редактировать Задачу
                          </button>
                        <button class="delete-btn" type="button" data-action="delete">Удалить задачу</button>
                    </div>

                  <div class="desc">
                    <p class="description" id="taskDescription">Описание:${task.taskDesc}</p>
                    <p class="dataDescription" id="taskDescription">
                        Дата создание задачи: ${task.taskDate}
                      </p>
                      <p class="idDesc">ID задачи:<span class="idNumber">${task.id}</span></p>
                 </div>
            </div>`;

  //добовляю на страницу

  tasksList.insertAdjacentHTML("beforeend", taskHTML);
})

createTaskButton.onclick = function () {
  hiddenMenu.style.display = "block";
};

closeButton.onclick = function () {
  hiddenMenu.style.display = "none";
};

// добавление задачи

const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const taskInputDesc = document.querySelector("#taskInputDesc");


form.addEventListener("submit", createTask);

function createTask(event) {
  event.preventDefault();

  const taskText = taskInput.value;
  const taskIDescText = taskInputDesc.value;
  const currentTime = new Date();
  const formattTime = currentTime.toLocaleString();
  const taskId = "id" + Math.random().toString(16).slice(2);

  const newTask = {
    id: taskId,
    taskName: taskText,
    taskDate: formattTime,
    taskDesc: taskIDescText,
  };

  tasks.push(newTask);

  const taskHTML = `<div class="task" id='${newTask.id}'>
                      <div class="visible">
                        <p class="task-p">${newTask.taskName}</p>
                        <p class="status-p">
                          Статус задачи:
                          <small class="status"
                             >Выполнен
                         <input
                             class="status-input"
                            type="checkbox"
                            id="statusInput"
                                        /></small>
                        </p>
                        <button class="description-btn" type="button" data-action="showmore">
                            Подробнее про задачу
                          </button>
                        <button class="edit-btn" type="button" >
                             Редактировать Задачу
                          </button>
                        <button class="delete-btn" type="button" data-action="delete">Удалить задачу</button>
                    </div>

                  <div class="desc">
                    <p class="description" id="taskDescription">Описание:${newTask.taskDesc}</p>
                    <p class="dataDescription" id="taskDescription">
                        Дата создание задачи: ${newTask.taskDate}
                      </p>
                      <p class="idDesc">ID задачи: <span class="idNumber">${newTask.id}</span></p>
                 </div>
            </div>`;

  //добовляю на страницу

  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  taskInput.value = "";
  taskInputDesc.value = "";
  hiddenMenu.style.display = "none";

  //сохранение изменениий в localStorage

  saveToLocalStorage();
}

//удаление задачи

tasksList.addEventListener("click", deleteTask);

function deleteTask(event) {
  if (event.target.dataset.action !== "delete") return;

  const parentNode = event.target.closest(".task");
  const id = parentNode.id;

  const index = tasks.findIndex(function (task) {
    if (task.id == id) {
      return true;
    }
  });

  tasks.splice(index, 1);

  //сохранение изменений в localStorage

  saveToLocalStorage();

  //удаляем

  parentNode.remove();
}

tasksList.addEventListener('click', showMore);

function showMore(event) {
  if (event.target.dataset.action === 'showmore') {
    const visibleContainer = event.target.closest('.visible');
    const descChild = visibleContainer.nextElementSibling;

    
    if (descChild.style.display === 'block') {
      
      descChild.style.display = 'none';
    } else {
      
      descChild.style.display = 'block';
    }
  }
}







//работа с localstorage

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}



