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

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

close.addEventListener('click', () => {
  modal.style.display = 'none'
})

function valorModal(){
  let valorInput = inputModal.value
  let valorTextarea = textareaModal.value

  localStorage.setItem('valor1', valorInput)
  localStorage.setItem('valor2', valorTextarea)

  let recValorInput = localStorage.getItem('valor1')
  let recValorTextarea = localStorage.getItem('valor2')

  if (recValorInput || recValorTextarea){
    taskDesc.innerHTML = `
      <p>${recValorInput}</p>
      <span>${recValorTextarea}</span>
    `
    noTasks.style.display = 'none'
    appearTasks.style.display = 'block'
  }



}

