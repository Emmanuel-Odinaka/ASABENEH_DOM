let colors = setInterval(change, 1000)
function change() {
    let box = document.querySelector('.jscript')
    if (box.style.backgroundColor == 'pink') {
        box.style.backgroundColor = 'lightgoldenrodyellow'
    } else if (box.style.backgroundColor == 'lightgoldenrodyellow') {
        box.style.backgroundColor = 'lightblue'
    } else if (box.style.backgroundColor == 'lightblue') {
        box.style.backgroundColor = 'lightgreen'
    } else if (box.style.backgroundColor == 'lightgreen') {
        box.style.backgroundColor = 'magenta'
    } else {
        box.style.backgroundColor = 'pink'
    }
}

let characters = document.querySelectorAll('.jscript span')
console.log("🚀 ~ file: script.js ~ line 18 ~ characters ", characters[0])

let colorList = ['red', 'orange', 'blue', 'cyan',  'purple']
let currentColor = 0
function textChange() {
    --currentColor
    if (currentColor < 0) currentColor = colorList.length-1
    for (let i=0; i<characters.length; i++) {
        characters[i].style.color = colorList[(currentColor + i) % (colorList.length)]
        
    }
}
setInterval(textChange, 2000)