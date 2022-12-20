"use strict"

// ----- Elements -----
const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

function inputLength() {
   return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + ' '));
    ul.appendChild(li);
    let btn = document.createElement('button');
    btn.setAttribute('class', 'delete')
    btn.appendChild(document.createTextNode('delete'));
    li.appendChild(btn);
    input.value = '';
}

button.addEventListener('click', function() {
    if (inputLength() > 0) {
        createListElement();
    }
})

input.addEventListener('keypress', function(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
})

ul.addEventListener('click', function(e) {
    if (e.target.className === "delete") {
        e.target.parentElement.remove();
    } else {
    e.target.classList.toggle('done');
}
})

