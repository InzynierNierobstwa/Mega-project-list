/* Numbers 00. Find PI to the Nth Digit - Enter a number and have the program generate PI
up to that many decimal places.Keep a limit to how far the program will go.
John Machin's formula pi/4 = 4 * arctan(1 / 5) - arctan(1 / 239) */

//DOM 

let inputPlace = document.getElementById('numOfDig');
let subBtn = document.getElementById('btnSubmit');
let resBtn = document.getElementById('btnReset');
let listArea = document.getElementsByTagName('ul')[0];

let digit;
subBtn.addEventListener('click', function(){
    digit = inputPlace.value;
    let listPoint = document.createElement('li');
    listPoint.innerHTML = getPI(digit);
    listArea.appendChild(listPoint);
    inputPlace.value = '';
})

resBtn.addEventListener('click', function(){
    listArea.innerHTML = '';
})

function getPI(digit) {
    if (digit === 0 || digit > 20) {
        digit = 20
    }
    return (16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)).toFixed(digit);
};