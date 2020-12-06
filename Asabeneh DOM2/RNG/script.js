let container = document.createElement('div');
container.className = 'wrapper';

for (let i=0; i<=101; i++) {
    let box = document.createElement('p');
    box.textContent = i;
    document.body.appendChild(container).append(box)
    

    // for (let i = 0; i <= 100; i++) {
    // for getting prime number
        let notPrime = false;
        for (let j = 2; j <= i; j++) {
            if (i%j===0 && j!==i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            box.className = 'red';
            if (i == 0) box.className = 'green'
            if (i == 1) box.className = 'yellow'
        } 
    // }


    else if (i%2 === 0) { // for getting even numbers
        box.className = 'green';
    } else box.className = 'yellow' // odd numbers
    
}
