let button1 = document.querySelector('#starting');
let button2 = document.querySelector('#searching');
let button3 = document.querySelector('#reversing');
let input = document.querySelector('#input');
let container = document.querySelector('.countries-field');
let result = document.createElement('div');
let resultReverse = document.createElement('div');
let revCountry;

for (let i=0; i<countries.length; i++) {
    let box = document.createElement('div')
    box.innerText = countries[i]
    box.className = 'box'
    
    result.className = 'countries-field'
    result.append(box);

    
} document.querySelector('.countries-field').replaceWith(result)

button3.addEventListener('click', () => {
        revCountry = countries.reverse()

    for (let k=0; k<countries.length; k++) {
        let boxReverse = document.createElement('div')
        boxReverse.innerText = revCountry[k]
        boxReverse.className = 'box'
        
        resultReverse.className = 'countries-field'
        resultReverse.append(boxReverse);  
    } 
    document.querySelector('.countries-field').replaceWith(resultReverse)
})

button1.addEventListener('click', () => {
    input.addEventListener('input', () => {
        let filter = input.value.charAt(0).toUpperCase()
        let boxArray = result.getElementsByClassName('box')
     
        for (let j=0; j<boxArray.length; j++) {
            let boxText = boxArray[j].textContent || boxArray[j].innerText
            if (boxText.charAt(0).toUpperCase().includes(filter)) {
                boxArray[j].style.display = ''
            } else {
                boxArray[j].style.display = 'none'
            }
        }
        document.querySelector('.countries-field').replaceWith(result)
        
    })
})

button2.addEventListener('click', () => {
    input.addEventListener('input', () => {
    let filter = input.value.toUpperCase()
    let boxArray = result.getElementsByClassName('box')
 
    for (let j=0; j<boxArray.length; j++) {
        let boxText = boxArray[j].textContent || boxArray[j].innerText
        if (boxText.toUpperCase().includes(filter)) {
            boxArray[j].style.display = ''
        } else {
            boxArray[j].style.display = 'none'
        }
    }
    document.querySelector('.countries-field').replaceWith(result)

})
})

    