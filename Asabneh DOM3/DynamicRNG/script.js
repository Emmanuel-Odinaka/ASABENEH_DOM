let container = document.querySelector('.wrapper');
let button = document.querySelector('#button');
let input = document.querySelector('#input');
let form = document.querySelector('#form');

button.addEventListener('click', () => {
    //event.preventDefault();
 if (isNaN(input.value)) {
     alert('enter number')
 } else {

    for (let i=0; i<=input.value-1; i++) {
        
        let box = document.createElement('p');
        box.textContent = i;
        container.innerHTML = box
    
        let notPrime = false;
        for (let j = 2; j <= i; j++) { // for getting prime numbers
            if (i%j===0 && j!==i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            box.className = 'red';
            if (i == 0) box.className = 'green'
            if (i == 1) box.className = 'yellow'
        } 
    
        else if (i%2 === 0) { // for getting even numbers
            box.className = 'green';
        } else box.className = 'yellow' // odd numbers      
    } 
 }  
})  


