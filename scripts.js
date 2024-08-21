const addTaskBtn = document.getElementById('add-task-btn')

const noTasks = document.getElementById('no-tasks')

const appearTasks = document.getElementById('appear-tasks')

const modal = document.getElementById('modal')

const closeModal = document.getElementById('close-modal')

const inputModal = document.getElementById('input-modal')

const textareaModal = document.getElementById('textarea-modal')

const saveTask = document.getElementById('save-task')

const close = document.getElementById('close')

const taskDesc = document.getElementById('task-desc')

const nomeTask = document.getElementById('nome-task')

const descTask = document.getElementById('desc-task')

const taskCheck = document.getElementById('task-check')

const formTasks = document.getElementById('form-tasks')

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

close.addEventListener('click', () => {
  modal.style.display = 'none'
})

formTasks.addEventListener('submit', function(event) {
  event.preventDefault(); 

  let valorInput = inputModal.value
  let valorTextarea = textareaModal.value

  const novaTarefa = {
    valorInput: valorInput,
    valorTextarea: valorTextarea
  };

  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  tarefas.push(novaTarefa);

  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  formTasks.reset()

  displayTasks()

})

function displayTasks(){
  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  

  tarefas.forEach(function(tarefa) {
    if (tarefas){

const taskCheck = document.createElement('div');
taskCheck.className = 'tasks';
taskCheck.id = 'task-check';

const checkboxDiv = document.createElement('div');
checkboxDiv.className = 'checkbox';

const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';

checkboxDiv.appendChild(checkboxInput);

const descriptionTaskDiv = document.createElement('div');
descriptionTaskDiv.className = 'description-task';
descriptionTaskDiv.id = 'task-desc';

const p = document.createElement('p');
p.textContent = `${tarefa.valorInput}`;

const span = document.createElement('span');
span.textContent = `${tarefa.valorTextarea}`;

descriptionTaskDiv.appendChild(p);
descriptionTaskDiv.appendChild(span);

const nullDiv = document.createElement('div');
nullDiv.className = 'null';

const editAndRemoveDiv = document.createElement('div');
editAndRemoveDiv.className = 'editAndRemove-tasks';

const editButton = document.createElement('button');
const editImg = document.createElement('img');
editImg.src = '/assets/edit-task.svg';
editImg.alt = 'Editar tarefas';
editImg.id = 'edit-task';
editButton.appendChild(editImg);

const removeButton = document.createElement('button');
const removeImg = document.createElement('img');
removeImg.src = '/assets/remove-task.svg';
removeImg.alt = 'Remover tarefas';
removeImg.id = 'remove-task';
removeButton.appendChild(removeImg);

editAndRemoveDiv.appendChild(editButton);
editAndRemoveDiv.appendChild(removeButton);

taskCheck.appendChild(checkboxDiv);
taskCheck.appendChild(descriptionTaskDiv);
taskCheck.appendChild(nullDiv);
taskCheck.appendChild(editAndRemoveDiv);

appearTasks.appendChild(taskCheck);

noTasks.style.display = 'none'
appearTasks.style.display = 'block'
    }
  }
);
}

displayTasks()


/*
function valorModal(){

  let valorInput = inputModal.value
  let valorTextarea = textareaModal.value

  localStorage.setItem('valor1', valorInput)
  localStorage.setItem('valor2', valorTextarea)

  const tarefa = {
    valorInput: valorInput,
    valorTextarea: valorTextarea
  };

  const tarefaArray = tarefa;

  let tarefas1 = JSON.parse(localStorage.getItem(valorInput)) || [];
  let tarefas2 = JSON.parse(localStorage.getItem(valorTextarea)) || [];

  tarefas1.push(tarefaArray);

  console.log(tarefaArray);

  if (tarefaArray.valorInput || tarefaArray.valorTextarea){
    taskDesc.innerHTML = `
      <p>${tarefaArray.valorInput}</p>
      <span>${tarefaArray.valorTextarea}</span>
    `
   
  }

}
*/
