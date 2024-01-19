let createTaskButton = document.querySelector('.create-btn');
let hiddenMenu = document.querySelector('.main-task-container');
let closeButton = document.querySelector('.close-btn');
let body = document.querySelector('body');
let edit = document.querySelector('.edit-btn');
let redact = document.querySelector('.redact-container');
let closeRedact = document.querySelector('.close-redact-btn')

createTaskButton.onclick = function(){
  hiddenMenu.style.display = 'block';
}

closeButton.onclick =function (){
  hiddenMenu.style.display = 'none';
}

// добавление задачи 

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');


form.addEventListener('submit', createTask);


function createTask(event) {
  
  event.preventDefault();

  const taskText = taskInput.value;
  
  const taskHTML = `<div class="task">
                      <p class="task-p">${taskText}</p>
                      <p class="status-p">
                          Статус задачи: <small class="status">Выполнен <input class="status-input" type="checkbox"></small>
                        </p>
                      <button class="description-btn">Подробнее про задачу</button>
                      <button class="edit-btn">Редактировать Задачу</button>
                      <button class="delete-btn" data-action="delete">Удалить задачу</button>
                    </div>`;

 //добовляю на страницу

tasksList.insertAdjacentHTML('beforeend', taskHTML);

taskInput.value = '';
}

//удаление задачи 

tasksList.addEventListener('click', deleteTask);


function deleteTask(event){
  if (event.target.dataset.action === 'delete') {
    console.log('DELETE');
    const parentNode = event.target.closest('.task');

    parentNode.remove();
  }
}

// class Task {
//   #id;
//   #taskName;
//   #description;
//   #taskData;
//   #status
//   constructor(taskName, descrition, taskData,status ){
//     this.#id = "id" + Math.random().toString(16).slice(2);
//     this.taskName = taskName;
//     this.#description = descrition;
//     this.#taskData = taskData;
//     this.#status = status;
//   }

//   get id(){
//     return this.#id;
//   }

//   get taskName(){
//     return this.#taskName;
//   }

//   get descrition(){
//     return this.#description;
//   }

//   get taskData(){
//     return this.#taskData;
//   }

//   get status(){
//     return this.#status;
//   }
// }

// class Tasks{
//   #tasks;
//   addTask(...tasks) {
//     tasks.forEach((task) => {
//       if(!this.#tasks.includes(task)) {
//         this.#tasks.push(task);
//       }
//     })
//   }
// }