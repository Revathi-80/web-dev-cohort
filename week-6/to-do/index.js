const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todoUl = document.getElementById('todo-ul')
const clearBtn = document.getElementById('clear-btn')

addBtn.addEventListener('click', () =>{
    const value = todoInput.value;
   
    const li = document.createElement('li')
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', () => {
        li.remove()
    })
    li.innerText = value;
    li.appendChild(deleteBtn)
    todoUl.appendChild(li)
    todoInput.value = ''
})

clearBtn.addEventListener('click', () => {
    todoUl.innerHTML = ''
})




