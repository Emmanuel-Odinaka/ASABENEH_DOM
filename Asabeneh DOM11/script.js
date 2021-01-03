let form = document.querySelector('#form')
let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let telephone = document.querySelector('#telephone')
let bio = document.querySelector('#bio')
let submit = document.querySelector('#submit')

let nameValid1 = document.querySelector('.name-valid1')
let nameValid2 = document.querySelector('.name-valid2')
let passwordValid = document.querySelector('.password-valid')
let emailValid = document.querySelector('.email-valid')
let telephoneValid = document.querySelector('.telephone-valid')
let bioValid = document.querySelector('.bio-valid')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nameFilter1 = /\S\w$/i 
    if (nameFilter1.test(firstName.value)) { //alphanumeric character without space
        nameValid1.innerHTML = ''
        
    } else {
        nameValid1.innerHTML = 'Enter any alphanumeric character'
        firstName.focus()  //focus when the statement is not met
        nameValid1.style.color = 'red' //red color to show failed test
    }

    let nameFilter2 = /\S[a-z0-9]$/i
    if (nameFilter2.test(lastName.value)) { //alphanumeric character without space
        nameValid2.innerHTML = ''
        
    } else {
        nameValid2.innerHTML = 'Enter any alphanumeric character'
        lastName.focus()  //focus when the statement is not met
        nameValid2.style.color = 'red'  //red color to show failed test
    }


    let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ //email test
    if (emailFilter.test(email.value)) { // email test
        emailValid.innerHTML = ''
    } else {
        emailValid.innerHTML = 'Enter correct email'
        email.focus()  //focus when the statement is not met
        emailValid.style.color = 'red'  //red color to show failed test
    }

    let passwordFilter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if (passwordFilter.test(password.value)) { //password test
        passwordValid.innerHTML = ''
    } else {
        passwordValid.innerHTML = 'Enter password having number, character'
        password.focus()  //focus when the statement is not met
        passwordValid.style.color = 'red' //red color to show failed test
    }

    let phoneFilter = /^\d{11}$/
    if (phoneFilter.test(telephone.value)) {  // phone number test
        telephoneValid.innerHTML = ''
    } else {
        telephoneValid.innerHTML = 'Enter 11 digit number'
        telephone.focus()  //focus when the statement is not met
        telephoneValid.style.color = 'red'  //red color to show failed test
    }

    let bioFilter = /^[A-Za-z0-9 .'?!,@$#-_]{1,30}$/
    if (bioFilter.test(bio.value)) {  // BIO test
        bioValid.innerHTML = ''
    } else {
        bioValid.innerHTML = 'Enter bio with characters less than 30'
        bio.focus()  //focus when the statement is not met
        bioValid.style.color = 'red'  //red color to show failed test
    }



    if (nameFilter1.test(firstName.value) === false ||  //test to change the color of submit on successful validation
        nameFilter2.test(lastName.value) === false || 
        emailFilter.test(email.value) === false || 
        passwordFilter.test(password.value) === false || 
        phoneFilter.test(telephone.value) === false || 
        bioFilter.test(bio.value) === false) {
        submit.style.backgroundColor = 'black'
    } else {
        submit.style.backgroundColor = 'green' //submit changes to green
        firstName.style.border = '1px solid green'  //all borders changes to green on successful validation
        lastName.style.border = '1px solid green'
        email.style.border = '1px solid green'
        password.style.border = '1px solid green'
        telephone.style.border = '1px solid green'
        bio.style.border = '1px solid green'
    }
    
})