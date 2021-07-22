//Declare
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const main = document.createElement('div')
const spanTask = document.createElement('span')

//Add List by Clicking
addBtn.addEventListener('click', () => {
    const span = document.createElement('span')
    span.innerHTML = input.value
    spanTask.append(span)
    spanTask.append(document.createElement('br'))
    main.append(spanTask)
})

//Add List by Enter Key
input.addEventListener('keypress', ev => {
    if(ev.code === 'Enter') {
        ev.preventDefault()
        const span = document.createElement('span')
        span.innerHTML = input.value
        spanTask.append(span)
        spanTask.append(document.createElement('br'))
        main.append(spanTask)
    }
})

document.body.append(main)