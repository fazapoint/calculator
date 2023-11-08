const buttons = document.querySelectorAll('.btn');

function btnDown(event) {
    const button = event.target;
    button.style.transform = 'translateY(2px)';
}

function btnUp(event) {
    const button = event.target;
    button.style.transform = 'translateY(0px)';
}

buttons.forEach((button) => {
    button.addEventListener('mousedown', btnDown);
    button.addEventListener('mouseup', btnUp)
})