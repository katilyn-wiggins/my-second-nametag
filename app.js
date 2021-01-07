const nameElement = document.getElementById('user-name'); 
const inputElement = document.getElementById('user-input');
const buttonElement = document.getElementById('my-button');
const blueElement = document.getElementById('blue-button');
const orangeElement = document.getElementById('orange-button');
const yellowElement = document.getElementById('yellow-button');
const pagecolor = document.getElementById('body');
const fontElement = document.getElementById('font');
const counterElement = document.getElementById('counter');



buttonElement.addEventListener('click', () => {
    nameElement.textContent = inputElement.value;
    console.log('you pushed the button!');

});

buttonElement.onclick = function () {
    count+= 1; 
    buttonElement.innterHTML = "Click me:" + count;         
};

blueElement.addEventListener('click', () => {
    pagecolor.style.background = 'lightblue';

});


orangeElement.addEventListener('click', () => {
    pagecolor.style.background = 'orange';

});


yellowElement.addEventListener('click', () => {
    pagecolor.style.background = 'yellow';

})

fontElement.addEventListener('click', () => {
    nameElement.style.fontFamily = 'garamond';

})

let count = 0

buttonElement.addEventListener("click", () => { 
    counterElement.textContent = count++;
    updateDisplay();

});

