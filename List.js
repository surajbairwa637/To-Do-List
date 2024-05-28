const inputtdl = document.querySelector('.text')
const buttontdl = document.querySelector('.buttoninput')
const List = document.querySelector('.todo-list')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    // const editbutton = document.createElement("button")
    // editbutton.innerHTML = '<i class="fa-solid fa-edit"></i>'
    // editbutton.classList.add("edit-button")
    // itemall.appendChild(editbutton)

    const status = document.createElement("button")
    status.innerHTML = '<i class="fa-solid fa-check"></i>'
    status.classList.add("check-button")
    itemall.appendChild(status)

    const deletebtn = document.createElement("button")
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deletebtn.classList.add("trash-button")
    itemall.appendChild(deletebtn)

    List.appendChild(itemall)
    inputtdl.value = ''
}

// checking and delete todoList 
function handle(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    //edit
    // if (item.classList[0]==='edit-button') {
    //     const taskText = item.parentElement.querySelector('.item')
    //     const newText = prompt('Edit task:', taskText.innerText);
    //     if (newText !== null) {
    //         taskText.innerText = newText;
    //     }
    // }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
List.addEventListener('click', handle)