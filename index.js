let createTaskButton = document.querySelector('.create-btn');
let hiddenMenu = document.querySelector('.main-task-container');
let closeButton = document.querySelector('.close-btn');
let body = document.querySelector('body');




createTaskButton.onclick = function(){
  hiddenMenu.style.display = 'block';
}

closeButton.onclick =function (){
  hiddenMenu.style.display = 'none';
}

// добавление задачи 

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskInputDesc = document.querySelector('#taskInputDesc')
const tasksList = document.querySelector('#tasksList');


form.addEventListener('submit', createTask);


function createTask(event) {
  
  event.preventDefault();

  const taskText = taskInput.value;
  const taskIDescText = taskInputDesc.value;
  const currentTime = new Date();
  const formattTime = currentTime.toLocaleString();

  const taskHTML = `<div class="task">
                      <div class="visible">
                        <p class="task-p">${taskText}</p>
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
                        <button class="description-btn" type="button">
                            Подробнее про задачу
                          </button>
                        <button class="edit-btn" type="button" data-action="delete">
                             Редактировать Задачу
                          </button>
                        <button class="delete-btn" type="button">Удалить задачу</button>
                    </div>

                  <div class="desc">
                    <p class="description" id="taskDescription">Описание:${taskIDescText}</p>
                    <p class="dataDescription" id="taskDescription">
                        Дата создание задачи: ${formattTime}
                      </p>
                 </div>
            </div>`;

 //добовляю на страницу

tasksList.insertAdjacentHTML('beforeend', taskHTML);

taskInput.value = '';
taskInputDesc.value ='';
hiddenMenu.style.display = 'none';
}

//удаление задачи 

tasksList.addEventListener('click', deleteTask);


function deleteTask(event){

  if (event.target.dataset.action === 'delete') {
    const parentNode = event.target.closest('.task');

    parentNode.remove();
  }
}


// подробнее про задачу 









//отметка о том что задача выполнена



// const statusInput = document.querySelector('#statusInput');

// statusInput.addEventListener('change', function(event){
//   if(statusInput.checked){
//     const parentNode = event.target.closest('.task');

//     parentNode.style.backgroundColor = 'lightgreen';
//   } else {
//     parentNode.style.backgroundColor = '';
//   }
// });

//////////////////////////////////////////////////////////////////////

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