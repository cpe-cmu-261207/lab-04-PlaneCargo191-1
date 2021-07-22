//Declare
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const main = document.createElement('div')

//Add List
addBtn.addEventListener('click', () => {
    const spanTask = document.createElement('span')
    const span = document.createElement('span')
    span.innerHTML = input.value
    spanTask.append(span)
    spanTask.append(document.createElement('br'))
    main.append(spanTask)
})

document.body.append(main)