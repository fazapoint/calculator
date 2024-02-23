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
        mainScreenTextElement.textContent = 0;
    }else{
        mainScreenTextElement.textContent = numMainScreen;
    }
}

function showTopScreen(){
    topScreenTextElement.textContent = numTopScreen;
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
        numberButtons.forEach((button) => {
            button.disabled = true;
        });
        
        operationButtons.forEach((button) => {
            button.disabled = true;
        });
    }else{
        numberButtons.forEach((button) => {
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

numberButtons.forEach((button) => {
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

deleteButton.addEventListener('click', function(){
    deleteLastNumber();
    checkNumMainScreenLength();
});

resetButton.addEventListener('click', function(){
    clearScreen();
    checkNumMainScreenLength();
});

