let texts = document.querySelector('.sub-text');
let change = setInterval(move, 3855);
function move() {
    if (texts.innerHTML == 'Front-End Developer') {
        texts.innerHTML = 'Student'
    } else if (texts.innerHTML == 'Student') {
        texts.innerHTML = 'Engineer'
    } else if (texts.innerHTML == 'Engineer') {
        texts.innerHTML = 'Programmer'
    } else {
        texts.innerHTML = 'Front-End Developer'
    }
}

let stacks = document.querySelector('.stack');
let stackChange = setInterval(next, 2000);
function next() {
    if (stacks.innerHTML == 'HTML') {
        stacks.innerHTML = 'CSS'
        stacks.style.color = 'red'
    } else if (stacks.innerHTML == 'CSS') {
        stacks.innerHTML = 'Javascript'
        stacks.style.color = 'blue'
    } else if (stacks.innerHTML == 'Javascript') {
        stacks.innerHTML = 'Jquery'
        stacks.style.color = 'yellow'
    } else if (stacks.innerHTML == 'Jquery') {
        stacks.innerHTML = 'React'
        stacks.style.color = 'green'
    } else {
        stacks.innerHTML = 'HTML'
    }
}