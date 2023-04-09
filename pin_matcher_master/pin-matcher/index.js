function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pins = generatePin();
    const pinString = pins + '';
    if (pinString.length === 4) {
        return pinString;
    }
    else {
        return generatePin();
    }
}

document.getElementById('pin-generator').addEventListener('click', function () {
    const pin = getPin();
    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
})



document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumberDisplay = document.getElementById('typed-number-display');
    const typedNumbers = event.target.innerText;
    if (isNaN(typedNumbers)) {
        if (typedNumbers === 'C') {
            typedNumberDisplay.value = '';
        }
        else if (typedNumbers === '<') {
            const digits = typedNumberDisplay.value.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberDisplay.value = remainingDigits;
        }
    }
    else {
        const previousTypedNumbers = typedNumberDisplay.value
        typedNumberDisplay.value = previousTypedNumbers + typedNumbers;
    }
})


document.getElementById('verify-pin').addEventListener('click', function() {
    const generatedPinField = document.getElementById('display-pin');
    const generatedPin = generatedPinField.value;

    const typedNumbersField = document.getElementById('typed-number-display');
    const typedNumbers = typedNumbersField.value;

    
    const failureMessage = document.getElementById('pin-failure');
    const successMessage = document.getElementById('pin-success');
    if(generatedPin === typedNumbers) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    }
    else{
        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})