let button = document.querySelector('#button');
let input = document.querySelector('#input');
let form = document.querySelector('#form');

button.addEventListener('click', () => {
    let container = document.createElement('div');
    container.id = 'result';
    let inputValue = Number(input.value);

    if (isNaN(inputValue)) {
        alert('enter number')
    } else {

        for (let i=0; i<=inputValue-1; i++) {
            
            let box = document.createElement('p');
            box.textContent = i;
        
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
            }
            else box.className = 'yellow' // odd numbers

            container.appendChild(box);      
        }
        document.getElementById('result').replaceWith(container);
    }  
})  


