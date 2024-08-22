const addTaskBtn = document.getElementById('add-task-btn')

const noTasks = document.getElementById('no-tasks')

const appearTasks = document.getElementById('appear-tasks')

const modal = document.getElementById('modal')

const closeModal = document.getElementById('close-modal')

const inputModal = document.getElementById('input-modal')

const textareaModal = document.getElementById('textarea-modal')

const saveTask = document.getElementById('save-task')

const closeModal2 = document.getElementById('close')

const taskDesc = document.getElementById('task-desc')

const nomeTask = document.getElementById('nome-task')

const descTask = document.getElementById('desc-task')

const taskCheck = document.getElementById('task-check')

const formTasks = document.getElementById('form-tasks')

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

closeModal2.addEventListener('click', () => {
  modal.style.display = 'none'
})


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
function displayTasks() {

  appearTasks.innerHTML = ''
    
  tarefas.forEach(function (tarefa, index) {
    console.log(tarefa)
    console.log(tarefa.taskInput)
    console.log(tarefa.taskTextarea)

    if (tarefas.length) {
      const taskCheck = document.createElement('div')
      taskCheck.className = 'tasks'
      taskCheck.id = `task-check-${index}`
      
      const checkboxDiv = document.createElement('div')
      checkboxDiv.className = 'checkbox'

      const checkboxInput = document.createElement('input')
      checkboxInput.type = 'checkbox'
      
      checkboxDiv.appendChild(checkboxInput)

      checkboxInput.addEventListener('click', () => {
        p.style.textDecoration = checkboxInput.checked ? 'line-through' : 'none'
        span.style.textDecoration = checkboxInput.checked ? 'line-through' : 'none'
      })
      
      const descriptionTaskDiv = document.createElement('div')
      descriptionTaskDiv.className = 'description-task'
      descriptionTaskDiv.id = 'task-desc'
      
      const p = document.createElement('p')
      p.textContent = `${tarefa.taskInput}`
      
      const span = document.createElement('span')
      span.textContent = `${tarefa.taskTextarea}`
      
      descriptionTaskDiv.appendChild(p)
      descriptionTaskDiv.appendChild(span)
      
      const nullDiv = document.createElement('div')
      nullDiv.className = 'null'
      
      const editAndRemoveDiv = document.createElement('div')
      editAndRemoveDiv.className = 'editAndRemove-tasks'
      
      const editButton = document.createElement('button')
      const editImg = document.createElement('img')
      editImg.src = '/assets/edit-task.svg'
      editImg.alt = 'Editar tarefas'
      
      editButton.addEventListener('click', () =>{
        modal.style.display = 'flex'
                
        inputModal.value = tarefa.taskInput
        textareaModal.value = tarefa.taskTextarea
        saveTask.dataset.index = index

      })
      editButton.appendChild(editImg)

      const removeButton = document.createElement('button')
      removeButton.id = 'remove-task'
      const removeImg = document.createElement('img')
      removeImg.src = '/assets/remove-task.svg'
      
      removeButton.addEventListener('click', function() {
        tarefas.splice(index, 1)
        
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        
        displayTasks()
      })
      
      removeButton.appendChild(removeImg)
      
      editAndRemoveDiv.appendChild(editButton)
      editAndRemoveDiv.appendChild(removeButton)
      
      taskCheck.appendChild(checkboxDiv)
      taskCheck.appendChild(descriptionTaskDiv)
      taskCheck.appendChild(nullDiv)
      taskCheck.appendChild(editAndRemoveDiv)
      
      appearTasks.appendChild(taskCheck)
      
      noTasks.style.display = 'none'
      appearTasks.style.display = 'block'
    }
    
    
  })

  if (tarefas.length === 0) {
    noTasks.style.display = 'block';
    appearTasks.style.display = 'none';
  }
  
}

formTasks.addEventListener('submit', function (event) {

  event.preventDefault()

  let valorInput = inputModal.value
  let valorTextarea = textareaModal.value

  const index = saveTask.dataset.index

  if(index !== undefined && index !== '') {
    tarefas[index] = { taskInput: valorInput, taskTextarea: valorTextarea };
    saveTask.removeAttribute('data-index');
  } else {
    tarefas.push({ taskInput: valorInput, taskTextarea: valorTextarea });
  }

  localStorage.setItem('tarefas', JSON.stringify(tarefas))

  formTasks.reset()

  modal.style.display = 'none';

  console.log(tarefas)

  displayTasks()
})

displayTasks();
