//import CSS
var head = document.getElementsByTagName('head')[0]
var link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'style.css'
head.appendChild(link)

//Declare
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const main = document.createElement('div')
const tasks = document.createElement('div')
const todoList = document.createElement('div')
const doneList = document.createElement('div')

todoList.style.textAlign = 'left'
doneList.style.textAlign = 'right'
doneList.style.marginRight = '40px'
tasks.style.display = 'flex'
tasks.style.justifyContent = 'space-between'

const doList = () => {
    if(input.value.length != 0) {
        //Declare
        const newItem = document.createElement('span')
        const doneBtn = document.createElement('button')
        const delBtn = document.createElement('button')
        const btn = document.createElement('button')
        const list = document.createElement('div')

        doneBtn.innerHTML = 'DONE'
        doneBtn.className = 'doneBtn'
        delBtn.innerHTML = 'DELETE'
        delBtn.className = 'delBtn'

        newItem.className = 'item'

        //Function
        list.addEventListener('mouseover', () => {
            doneBtn.style.visibility = 'visible'
            delBtn.style.visibility = 'visible'
        })
        list.addEventListener('mouseleave', () => {
            doneBtn.style.visibility = 'hidden'
            delBtn.style.visibility = 'hidden'
        })
        doneBtn.addEventListener('click', () => {
            list.removeChild(btn)
            doneList.insertBefore(list, doneList.childNodes[0])
            newItem.className = 'doneItem'
        })
        delBtn.addEventListener('click', () => {
            todoList.removeChild(list)
        })

        //Get Input
        let item = input.value
        newItem.append(item)
        btn.append(doneBtn)
        btn.append(delBtn)
        list.append(newItem)
        list.append(btn)
        list.append(document.createElement('br'))
        todoList.insertBefore(list, todoList.childNodes[0])
        tasks.append(todoList)
        tasks.append(doneList)
        main.append(tasks)
    } else {
        alert('The Task Box is NOT Filled')
    }
}

//Add List by Clicking
addBtn.addEventListener('click', () => {
    doList()
})

//Add List by Enter Key
input.addEventListener('keypress', ev => {
    if(ev.code === 'Enter') {
        ev.preventDefault()
        doList()
    }
})

document.body.append(main)