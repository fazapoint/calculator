const buttons = document.querySelectorAll('.btn');
const topScreen = document.querySelector('#top-screen');
const mainScreen = document.querySelector('#main-screen');
const btnNum = document.querySelectorAll('.btn-num');
const btnDel = document.querySelector('.btn-del');
const btnOperator = document.querySelectorAll('.btn-operation');
const btnReset = document.querySelector('.btn-reset');

let numTopScreen = '1';
let numMainScreen = '0';
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
    mainScreen.textContent = numMainScreen;
}

function showTopScreen(){
    topScreen.textContent = numTopScreen;
}

function appendMainScreen(event){
    const button = event.target;
    numMainScreen = numMainScreen + button.textContent;
    showMainScreen();
}

function delMainScreen(){
    numMainScreen = numMainScreen.slice(0, -1);
    showMainScreen();
}

function checkNumMainScreenLength(){
    if (numMainScreen.length > 14){
        btnNum.forEach((button) => {
            button.disabled = true;
        });
        
        btnOperator.forEach((button) => {
            button.disabled = true;
        });
    }else{
        btnNum.forEach((button) => {
            button.disabled = false;
        });
        
        btnOperator.forEach((button) => {
            button.disabled = false;
        })
    }
}

function clearScreen(){
    numTopScreen = '';
    numMainScreen = '0';
    showTopScreen();
    showMainScreen();
}

///////////////////////////////////////////////////////////////////////

buttons.forEach((button) => {
    button.addEventListener('mousedown', btnDown);
    button.addEventListener('mouseup', btnUp)
});

btnNum.forEach((button) => {
    button.addEventListener('click', function(event){
        appendMainScreen(event);
        checkNumMainScreenLength();
    });
});

btnOperator.forEach((button) => {
    button.addEventListener('click', function(event){
        appendMainScreen(event);
        checkNumMainScreenLength();
    });
});

btnDel.addEventListener('click', function(){
    delMainScreen();
    checkNumMainScreenLength();
});

btnReset.addEventListener('click', function(){
    clearScreen();
    checkNumMainScreenLength();
});


