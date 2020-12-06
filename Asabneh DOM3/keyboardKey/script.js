let keycode = document.querySelector('#keycode');
let keynumber = document.querySelector('#keynumber');
let keyvalue = document.querySelector('#keyvalue');
let display = document.querySelector('#display');

document.body.addEventListener('keypress', e => {
    console.log(e.key);
    console.log(e)
})