let createTaskButton = document.querySelector('.create-btn');
let hiddenMenu = document.querySelector('.main-task-container');
let closeButton = document.querySelector('.close-btn');

createTaskButton.onclick = function(){
  hiddenMenu.style.display = 'block';
}

closeButton.onclick =function (){
  hiddenMenu.style.display = 'none';
}

