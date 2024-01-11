let createTaskButton = document.querySelector('.create-btn');
let hiddenMenu = document.querySelector('.main-task-container')

createTaskButton.onclick = function(){
  hiddenMenu.style.display = 'none';
}