//Declare
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const main = document.createElement('div')
const spanTask = document.createElement('span')
const todoList = document.createElement('ul')

//Add List by Clicking
addBtn.addEventListener('click', () => {
    const newItem = document.createElement("li")
    let item = input.value
    newItem.append(item)
    todoList.insertBefore(newItem, todoList.childNodes[0])
    spanTask.append(todoList)
    main.append(spanTask)
})

//Add List by Enter Key
input.addEventListener('keypress', ev => {
    if(ev.code === 'Enter') {
        ev.preventDefault()
        const newItem = document.createElement("li")
        let item = input.value
        newItem.append(item)
        todoList.insertBefore(newItem, todoList.childNodes[0])
        spanTask.append(todoList)
        main.append(spanTask)
    }
})

document.body.append(main)