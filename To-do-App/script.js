//Displays current date and time
let date = new Date();
date = date.toString().split(" ");
date = date[1] + " " + date[2] + " " + date[3];

const date2 = document.querySelector('.date');
date2.innerText = date;

const enter2 = document.querySelector('.enter');

//handles adding new tasks to the display area when the enter key is pressed
enter2.addEventListener("click", () => {
    const input = document.querySelector('#input1').value;
    if(input != ""){
    const span2 = document.createElement('span');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    span2.innerText = input;
    btn1.innerText = '\u2713'
    btn2.innerText = '\uD83D\uDDF7'
    btn1.classList.add('btn1')
    btn2.classList.add('btn2')
    span2.classList.add('span2')
    //button to remove task when clicked
    btn2.addEventListener("click", () => {
        span2.remove()
    })
    //button to mark task as completed when clicked
    btn1.addEventListener("click", () => {
        span2.style.textDecoration = 'line-through';
    })
    //appending task to the display area
    const display = document.querySelector('.displayArea');
    display.append(span2);
    span2.append(btn1);
    span2.append(btn2);
    document.querySelector('#input1').value = '';
    }
});