let createTaskButton = document.querySelector('.create-btn');
let hiddenMenu = document.querySelector('.main-task-container');
let closeButton = document.querySelector('.close-btn');
let body = document.querySelector('body');
let edit = document.querySelector('.edit-btn');
let redact = document.querySelector('.redact-container');
let closeRedact = document.querySelector('.close-redact-btn')

createTaskButton.onclick = function(){
  window.location.href = "pages/taskcreate.html";
}

closeButton.onclick =function (){
  window.location.href = "/index.html";
}

//commit test