let container = document.querySelector('.container')
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let country = document.querySelector('#country');
let score = document.querySelector('#score');
let addButton = document.querySelector('#add-button');
let result = document.querySelector('.result')


let now = new Date() //to get the date
let dates = now.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})  + now.toLocaleTimeString()



addButton.addEventListener('click', () => {  // add player event listener
    if (firstName.value ==='' || lastName.value === '' || country.value === '' || score.value === '') {
        result.innerHTML = 'all fields are required'
        result.className = 'result-warning'
        
    } else {
    container.style.display = ''
    let content = document.createElement('div') // each pink div for individual records
    content.className = 'content'

    let element1 = document.createElement('p')
    element1.className = 'name'  // the name and surname
    element1.innerHTML = firstName.value + ' ' + lastName.value
    + '<p class="span">' + dates + '</p>'

    let element2 = document.createElement('p')
    element2.className = 'country'
    element2.innerHTML = country.value

    let element3 = document.createElement('p')
    element3.className = 'score'
    element3.innerHTML = score.value

    let button1 = document.createElement('button')
    button1.className = 'button'
    button1.innerHTML = '<i class="fa fa-trash-o"></i>'

    let button2 = document.createElement('button')
    button2.className = 'button'
    button2.innerHTML = '+4'

    let button3 = document.createElement('button')
    button3.className = 'button'
    button3.innerHTML = '-4'
   
    content.append(element1)
    content.append(element2)
    content.append(element3)
    content.append(button1)
    content.append(button2)
    content.append(button3)
    
    container.append(content)
    result.replaceWith(container)

    button1.addEventListener('click', () => {
        container.removeChild(content)
    })

    button2.addEventListener('click', () => {
        element3.innerHTML = Number(score.value) + Number(button2.innerHTML)
    })

    button3.addEventListener('click', () => {
        element3.innerHTML =    Number(score.value) + Number(button3.innerHTML)
    })

    }

    
})



