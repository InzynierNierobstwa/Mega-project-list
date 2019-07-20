let inputPlace = document.getElementById('inputPlace');
let buttonSub = document.getElementById('buttonSub');
let listMain = document.getElementsByTagName('ul')[0];

let bin;
buttonSub.addEventListener('click', function(){
    bin = inputPlace.value;

    let listPoint = document.createElement('li');
    listPoint.innerHTML = bin2dec(bin);
    listMain.appendChild(listPoint);

    inputPlace.value = '';
})


function bin2dec(bin) {
    let decimal = '';
    for (let i = 0; i < bin.length - 1; i++) {
        decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
        return decimal;
    }
}
//binary to decimal function

