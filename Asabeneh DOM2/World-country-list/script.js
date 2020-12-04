let parent = document.querySelector('.countries-wrapper');

for (let i=0; i<countries.length; i++) {
    let child = document.createElement('p');
    child.innerHTML = countries[i].toUpperCase();
    child.className = 'box'
    parent.append(child)
}