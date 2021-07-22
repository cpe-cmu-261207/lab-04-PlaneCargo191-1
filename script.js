//import CSS
var head = document.getElementsByTagName('HEAD')[0]
var link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'style.css'
head.appendChild(link)

//Declare
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const main = document.createElement('div')
const spanTask = document.createElement('span')
const todoList = document.createElement('ul')

//Add List by Clicking
addBtn.addEventListener('click', () => {
    if(input.value.length != 0) {
        //Declare
        const newItem = document.createElement("li")
        newItem.style.textDecoration = 'none'
        const doneBtn = document.createElement('button')
        const delBtn = document.createElement('button')

        doneBtn.innerHTML = 'DONE'
        doneBtn.className = 'doneBtn'
        delBtn.innerHTML = 'DELETE'
        delBtn.className = 'delBtn'

        //Function
        newItem.addEventListener('mouseover', () => {
            doneBtn.style.visibility = 'visible'
            delBtn.style.visibility = 'visible'
        })
        newItem.addEventListener('mouseleave', () => {
            doneBtn.style.visibility = 'hidden'
            delBtn.style.visibility = 'hidden'
        })
        doneBtn.addEventListener('click', () => {
            newItem.removeChild(doneBtn)
            newItem.removeChild(delBtn)
            newItem.style.textDecoration = 'line-through'
        })
        delBtn.addEventListener('click', () => {
            todoList.removeChild(newItem)
        })

        //Get Input
        let item = input.value
        newItem.append(item)
        newItem.append(doneBtn)
        newItem.append(delBtn)
        todoList.insertBefore(newItem, todoList.childNodes[0])
        spanTask.append(todoList)
        main.append(spanTask)
    } else {
        alert('The Task Box is NOT Filled')
    }
})

//Add List by Enter Key
input.addEventListener('keypress', ev => {
    if(ev.code === 'Enter') {
        if(input.value.length != 0) {
            ev.preventDefault()
            const newItem = document.createElement("li")
            let item = input.value
            newItem.append(item)
            todoList.insertBefore(newItem, todoList.childNodes[0])
            spanTask.append(todoList)
            main.append(spanTask)
        } else {
            alert('The Task Box is NOT Filled')
        }
    }
})

document.body.append(main)