let parent = document.querySelector('.wrapper'); // first div holding the header
let parent2 = document.querySelector('.inner-wrapper'); // second div holding the courses
let parent3 = document.querySelector('.third-wrapper');
let parent3a = document.querySelector('.third-wrapper1');
let parent4 = document.querySelector('.fourth-wrapper');
let parent5 = document.querySelector('.fifth-wrapper');
let parent5a = document.querySelector('.fifth1');
let parent5b = document.querySelector('.fifth2');
let parent5c = document.querySelector('.fifth3');
let parent6 = document.querySelector('.sixth-wrapper');
let parent7 = document.querySelector('.keyword');
let value = Object.values(asabenehChallenges2020); //getting the values from the asabenehChallenges object
    let title = document.createElement('h2') //first title
    title.innerText = 'title: '  + value[0] + ' 2020';
    title.className = 'titles'
    title.classList.add('center')
    parent.append(title)

    let subTitle = document.createElement('h3'); //second title
    subTitle.innerText = value[2]
    subTitle.className = 'sub'
    subTitle.classList.add('center')
    parent.append(subTitle)

    let time = document.createElement('h3');  //date title
    time.innerText = new Date().toLocaleString()
    time.className = 'time'
    time.classList.add('center')
    parent.append(time)


for (let i=0; i<value[6].length; i++) {  // loop for dynamically getting each courses

    let container1 = document.createElement('div'); // container for python course
    container1.className = 'container' + i
    container1.classList.add('container0')
    let name1 = document.createElement('p'); // column housing the statement '30 days of python'
    name1.innerText = value[6][i].name
    container1.append(name1)

    let course1 = document.createElement('details'); //column housing python details
    let describe1 = document.createElement('summary')
    describe1.innerText = value[6][i].interviewQns

    for (let j=0; j<value[6][i].topics.length; j++){ //looping for the content of python
        let content1 = document.createElement('p');
        content1.innerHTML = value[6][i].topics[j]
        course1.append(content1) //appending the contents of the loop to the python course
    }
    course1.append(describe1) //appending the dropdowns to python course
    container1.append(course1) //finally appending python to the container

    let status1 = document.createElement('p') // column housing status
    status1.innerText = value[6][i].status
    container1.append(status1)

    parent2.append(container1)
}

let subParent3 = document.createElement('h2'); //adding asabeneh as heading
subParent3.innerText = value[5].firstName + ' ' + value[5].lastName
parent3a.append(subParent3);


for (let i=0; i<value[5].socialLinks.length; i++) { // looping to add fontawesome to parent3
    let subParent3a = document.createElement('div');
    subParent3a.innerHTML = value[5].socialLinks[i].fontawesomeIcon
    parent3.append(subParent3a)
}

let subParent4 = document.createElement('p');  // paragraph describing the instructor
subParent4.innerText = value[5].bio
parent4.append(subParent4)



let subParent5a1 = document.createElement('h2'); //titles portion
subParent5a1.innerText = Object.keys(value[5])[2]
parent5a.append(subParent5a1)
for (let i=0; i<value[5].titles.length; i++) {
    let subParent5a = document.createElement('div');
    subParent5a.innerText = value[5].titles[i] 
    parent5a.append(subParent5a)
}

let subParent5b1 = document.createElement('h2'); //skills portion
subParent5b1.innerText = Object.keys(value[5])[5]
parent5b.append(subParent5b1)
for (let i=0; i<value[5].skills.length; i++) {
    let subParent5b = document.createElement('div');
    subParent5b.innerText = value[5].skills[i]
    parent5b.append(subParent5b)
}

let subParent5c1 = document.createElement('h2'); //qualifications portion
subParent5c1.innerText = Object.keys(value[5])[3]
parent5c.append(subParent5c1)
for (let i=0; i<value[5].qualifications.length; i++) {
    let subParent5c = document.createElement('div');
    subParent5c.innerText = value[5].qualifications[i]
    parent5c.append(subParent5c)
}

let key = Object.keys(asabenehChallenges2020) //keywords section
let subParent7 = document.createElement('h2');
subParent7.innerText = key[4]
parent7.append(subParent7)

for (let i=0; i<value[4].length; i++) {
    let subParent6a1 = document.createElement('h4');
    subParent6a1.className = 'keys' + i
    subParent6a1.classList.add('keys')
    subParent6a1.innerText = '#' + value[4][i]
    parent6.append(subParent6a1)
}

