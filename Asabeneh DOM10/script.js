let result = document.createElement('div')
result.className = 'result'

let container = document.querySelector('.container')
container.className = 'container'

for (let i=0; i<countries.length; i++) {

    let box = document.createElement('div')
    box.className = 'box'
    let img = document.createElement('img')
    img.src = countries[i].flag
    let country = document.createElement('p')
    country.innerHTML = countries[i].name
    let capital = document.createElement('p')
    capital.innerHTML = countries[i].capital
    let language = document.createElement('p')
    language.innerHTML = countries[i].languages
    let population = document.createElement('p')
    population.innerHTML = countries[i].population



box.append(img, country, capital, language, population)
    result.append(box)
} container.replaceWith(result)

let input = document.querySelector('.input')

let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')

button1.addEventListener('click', () => {
    input.addEventListener('input', () => {
        let filter = input.value.toUpperCase()
        let boxArray = result.getElementsByClassName('box') //an array containing each boxex in a div
        for (let j=0; j<boxArray.length; j++) {
            let boxText = boxArray[j].children[1].textContent || boxArray[j].children[1].innerText  //children selecting only the name of the country 
            // console.log(boxText)
            if (boxText.toUpperCase().includes(filter)) {  //filtering statement
                boxArray[j].style.display = ''
            } else {
                boxArray[j].style.display = 'none'
            }
        }
        container.replaceWith(result)
    
    })

})


button2.addEventListener('click', () => {

    input.addEventListener('input', () => {
        let filter = input.value.toUpperCase()
        let boxArray = result.getElementsByClassName('box') //an array containing each boxes in a div
        for (let j=0; j<boxArray.length; j++) {
            let boxText = boxArray[j].children[2].textContent || boxArray[j].children[2].innerText  //children selecting only the name of the country 
            // console.log(boxText)
            if (boxText.toUpperCase().includes(filter)) {  //filtering statement
                boxArray[j].style.display = ''
                
            } else {
                boxArray[j].style.display = 'none'
            }
            
        } 
        container.replaceWith(result)
    
    })
})