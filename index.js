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

class Task {
  #id;
  #taskName;
  #description;
  #taskData;
  #status
  constructor(taskName, descrition, taskData,status ){
    this.#id = "id" + Math.random().toString(16).slice(2);
    this.taskName = taskName;
    this.#description = descrition;
    this.#taskData = taskData;
    this.#status = status;
  }

  get id(){
    return this.#id;
  }

  get taskName(){
    return this.#taskName;
  }

  get descrition(){
    return this.#description;
  }

  get taskData(){
    return this.#taskData;
  }

  get status(){
    return this.#status;
  }
}