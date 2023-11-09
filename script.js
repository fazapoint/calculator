const allButtons = document.querySelectorAll('.btn');
const topScreen = document.querySelector('#top-screen');
const mainScreen = document.querySelector('#main-screen');
const numButtons = document.querySelectorAll('.btn-num');
const delButton = document.querySelector('.btn-del');
const operationButtons = document.querySelectorAll('.btn-operation');
const resetButton = document.querySelector('.btn-reset');
const equalButton = document.querySelector('.btn-equal');
const zeroButton = document.querySelector('.btn-zero');

let numTopScreen = '1';
let numMainScreen = '';
showMainScreen();

//////////////////////////////////////////////////////////////////////////////
function btnDown(event){
    const button = event.target;
    button.style.transform = 'translateY(2px)';
}

function btnUp(event){
    const button = event.target;
    button.style.transform = 'translateY(0px)';
}

function showMainScreen(){
    if (numMainScreen === ''){
        mainScreen.textContent = 0;
    }else{
        mainScreen.textContent = numMainScreen;
    }
}

function showTopScreen(){
    topScreen.textContent = numTopScreen;
}

function appendMainScreen(number){
    numMainScreen = numMainScreen.toString() + number.toString();
    showMainScreen();
}

function deleteLastNumber(){
    numMainScreen = numMainScreen.slice(0, -1);
    showMainScreen();
}

function checkNumMainScreenLength(){
    if (numMainScreen.length > 14){
        numButtons.forEach((button) => {
            button.disabled = true;
        });
        
        operationButtons.forEach((button) => {
            button.disabled = true;
        });
    }else{
        numButtons.forEach((button) => {
            button.disabled = false;
        });
        
        operationButtons.forEach((button) => {
            button.disabled = false;
        })
    }
}

function clearScreen(){
    numTopScreen = '';
    numMainScreen = '';
    showTopScreen();
    showMainScreen();
}

///////////////////////////////////////////////////////////////////////

allButtons.forEach((button) => {
    button.addEventListener('mousedown', btnDown);
    button.addEventListener('mouseup', btnUp)
});

numButtons.forEach((button) => {
    // if (numMainScreen === '00'){
    //     zeroButton.addEventListener('click', () => return);
    // }
    button.addEventListener('click', function(event){
        appendMainScreen(button.textContent);
        checkNumMainScreenLength();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', function(event){
        appendMainScreen(event);
        checkNumMainScreenLength();
    });
});

delButton.addEventListener('click', function(){
    deleteLastNumber();
    checkNumMainScreenLength();
});

resetButton.addEventListener('click', function(){
    clearScreen();
    checkNumMainScreenLength();
});

// zeroButton.addEventListener('click', function(){
//  if(numMainScreen === '0') return;
// });


