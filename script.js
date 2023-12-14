// let names = ['Buy milk :)', 'End the project', 'Call mom', 'Sleep 10 hrs']

// for (let item of names) {
//     // create
//     let flex = document.createElement('div')
//     let blocks = document.createElement('div')
//     let box = document.createElement('div')
//     let center = document.createElement('div')
//     let milk = document.createElement('h3')
//     let img = document.createElement('img')
//     let timer = document.createElement('p')

//     // styling
//     flex.classList.add('flex')
//     blocks.classList.add('blocks')
//     box.classList.add('box')
//     center.classList.add('center2')
//     milk.classList.add('milk')
//     img.classList.add('close_img')
//     timer.classList.add('timer')

//     milk.innerHTML = item
//     img.setAttribute('src', './img/close_btn.svg')
//     img.setAttribute('alt', 'close btn')
//     timer.innerHTML = "18:44"

//     // append 
//     let body = document.body

//     body.append(flex)
//     flex.append(blocks)
//     blocks.append(box)
//     box.append(center, timer)
//     center.append(milk, img)
// }

// let submit = {
//     id: 2132231,
//     task: "buy model s",
//     time: "16:23",
//     isDone: false
// }


let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something !')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.append(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.append(span)
    }
    inputBox.value = ""
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
    } else if (
        e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
}), false