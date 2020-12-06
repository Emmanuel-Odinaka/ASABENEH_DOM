let keycode = document.querySelector('#keycode');
let keyvalue = document.querySelector('#keyvalue');
let display = document.querySelector('#display');
let valueblock = document.querySelector('#valueblock');
display.className = 'display'
document.body.addEventListener('keydown', e => {
    
    if (e.key == e.key) {
        display.innerHTML = '';
        display.className = '';
        keycode.innerText = e.keyCode;
        keycode.className = 'keycode';
        keyvalue.innerText = e.key;
        valueblock.innerText = 'you pressed ';
        keyvalue.className = 'keyvalue';
        valueblock.append(keyvalue);
        valueblock.className = 'valueblock';
    } 
})