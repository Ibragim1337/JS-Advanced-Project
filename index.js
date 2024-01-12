let createTaskButton = document.querySelector('.create-btn');
let hiddenMenu = document.querySelector('.main-task-container');
let closeButton = document.querySelector('.close-btn');
let body = document.querySelector('body')

createTaskButton.onclick = function(){
  hiddenMenu.style.display = 'block';
}

closeButton.onclick =function (){
  hiddenMenu.style.display = 'none';
}

