const displayDate = document.getElementById('date');
const date = new Date
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
const year = date.getFullYear()
const time = date.toLocaleTimeString();
const fullTime = month  + ' ' + day + ' ' + year + ' ' + time ;
displayDate.innerHTML = fullTime;


function changeColor() {
    let x = document.getElementById('year');
    if (x.style.color == "black") 
        x.style.color = "blue";
     else if (x.style.color =="blue") 
        x.style.color = "rgb(212, 170, 170)";
     else if (x.style.color == " rgb(212, 170, 170)") 
        x.style.color = "purple";
    else if (x.style.color == "purple") 
        x.style.color = "black";
     else x.style.color = "black";
};
setInterval(changeColor, 1000);

function changeBg() {
    if (displayDate.style.backgroundColor == "orange")
        displayDate.style.backgroundColor = "pink"
    else if (displayDate.style.backgroundColor == "pink")
        displayDate.style.backgroundColor = "yellow"
    else if (displayDate.style.backgroundColor == "yellow")
        displayDate.style.backgroundColor = "brown"
    else if (displayDate.style.backgroundColor == "brown")
        displayDate.style.backgroundColor = "red"
    else if (displayDate.style.backgroundColor == "red")
        displayDate.style.backgroundColor = "orange"
    else displayDate.style.backgroundColor = "orange"
}
setInterval(changeBg, 1000);
