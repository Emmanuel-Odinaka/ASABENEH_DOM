let input = document.querySelector('#mass');
let button = document.querySelector('#button');
let option = document.querySelector('#select');

button.addEventListener('click', () => {
    
    let inputValue = Number(input.value);
    let optionValue = option.value;
        if (isNaN(inputValue) || inputValue === 0) {
            document.querySelector('.description').innerHTML = 'Mass is required in figures'
            document.querySelector('.planet-image').src = '' 
        } else if (optionValue === 'earth') {
            console.log(typeof(inputValue))
            let weight = 9.81 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/earth.png';
        } else if (optionValue === 'jupiter') {
            let weight = 24.5 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/jupiter.png';
        } else if (optionValue === 'mars') {
            let weight = 3.7 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/mars.png';
        } else if (optionValue === 'mercury') {
            let weight = 3.59 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/mercury.png';
        } else if (optionValue === 'moon') {
            let weight = 1.62 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/moon.png';
        } else if (optionValue === 'neptune') {
            let weight = 14.07 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/neptune.png';
        } else if (optionValue === 'pluto') {
            let weight = 0.42 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/pluto.png';
        } else if (optionValue === 'saturn') {
            let weight = 11.08 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/saturn.png';
        } else if (optionValue === 'uranus') {
            let weight = 10.67 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/uranus.png';
        } else if (optionValue === 'venus') {
            let weight = 8.87 * inputValue
            document.querySelector('.description').innerHTML = '<div>The weight of object on '+ optionValue.toUpperCase() + '</div>' + '<h2>' + weight.toFixed(2) + 'N' + '</h2>';
            document.querySelector('.planet-image').src = './images/venus.png';
        } else if (optionValue === 'none') {
            document.querySelector('.description').innerHTML = 'You did not choose planet yet'
            document.querySelector('.planet-image').src = ''
        } 

})