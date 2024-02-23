class Calculator {
    constructor(topScreenTextElement, mainScreenTextElement){
        this.topScreenTextElement = topScreenTextElement;
        this.mainScreenTextElement = mainScreenTextElement;
        this.reset();
        this.updateScreen();
    }

    reset() {
        this.topScreenNumber = '';
        this.mainScreenNumber = '';
        this.operation = undefined;
    }

    delete() {
        this.mainScreenNumber = this.mainScreenNumber.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.mainScreenNumber.includes('.')) return
        this.mainScreenNumber = this.mainScreenNumber.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.mainScreenNumber === '') return
        if (this.mainScreenNumber !== '') {
            this.compute();
        }
        this.operation = operation;
        this.topScreenNumber = this.mainScreenNumber.toString() + " " + operation;
        this.mainScreenNumber = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.topScreenNumber);
        const current = parseFloat(this.mainScreenNumber);
        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return
        }
        this.mainScreenNumber = computation;
        this.operation = undefined;
        this.topScreenNumber = '';
    }

    updateScreen() {
        if (this.mainScreenNumber === '' && this.topScreenNumber === '') {
            this.mainScreenTextElement.innerText = '0';
            this.topScreenTextElement.innerText = this.topScreenNumber;
        } else {
            this.mainScreenTextElement.innerText = this.mainScreenNumber;
            this.topScreenTextElement.innerText = this.topScreenNumber;
        }
    }

}


///////////////////////////////////////////////////////////////////////

const allButtons = document.querySelectorAll('.btn');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const resetButton = document.querySelector('[data-reset]');
const deleteButton = document.querySelector('[data-delete]');
const topScreenTextElement = document.querySelector('[data-top-screen]');
const mainScreenTextElement = document.querySelector('[data-main-screen]');

///////////////////////////////////////////////////////////////////////

const calculator = new Calculator(topScreenTextElement, mainScreenTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateScreen();
    });
});

resetButton.addEventListener('click', () => {
    calculator.reset();
    calculator.updateScreen();
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateScreen();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateScreen();
});





































