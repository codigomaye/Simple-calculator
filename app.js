function addition(addend1, addend2) {

    if (typeof (addend1) != "number" || typeof (addend2) != "number") return "error";

    let sum = 0;

    sum = addend1 + addend2;

    return sum;
}

function substraction(minuend, subtraend) {

    if (typeof (minuend) != "number" || typeof (subtraend) != "number") return "error";

    let difference = 0;

    difference = minuend - subtraend;

    return difference;
}

function division(dividend, divisor) {

    if (typeof (dividend) != "number" || typeof (divisor) != "number" || divisor === 0) return "error";

    let quotient = 0;

    quotient = dividend / divisor;

    return quotient;
}

function multiplication(multiplicand, multiplier) {

    if (typeof (multiplicand) != "number" || typeof (multiplier) != "number") return "error";

    let product = 0;

    product = multiplicand * multiplier;

    return product;
}

function operate(operator, num1, num2) {

    let operation = {
        '+': addition(num1, num2),
        '-': substraction(num1, num2),
        '/': division(num1, num2),
        '*': multiplication(num1, num2),
        '=': num2
    }

    return operation[operator] ?? '';
}

function displayResult(num) {

    let display = document.querySelector(".display");

    display.textContent += num;

    return display.textContent;

}

function clearDisplay() {

    let display = document.querySelector(".display");

    display.textContent = "";
}

// Name: Keypad press
// Description: Print ou in "display" a number based on a key press from keypad
// Input:
// Ouput:
function keypadPress() {

    // Create object 'memory' with properties:
    let memory = {

        // 'previousNum' as number with value 0
        'previousNum': 0,

        // 'currentNum' as number with value 0
        'currentNum': 0,

        // 'input' as string with value empty string
        'input': '',

        // 'previousSign' as string with value empty string
        'previousSign': '',

        // 'currentSign' as string with value empty string
        'currentSign': '',

        // 'result' as number with value 0
        'result': 0,

        // 'reset' as function:
        'reset': function () {

            // -> set 'previousNum' value to 0
            this.previousNum = 0;

            // -> set 'currentNum' value to 0
            this.currentNum = 0;

            // -> set 'input' value to empty string
            this.input = '';

            // -> set 'previousSign' value empty string
            this.previousSign = '';

            // -> set 'currentSign' value to empty string
            this.currentSign = '';

            // -> set 'result' value to 0
            this.result = 0;

            // End function
        }
        // End Object
    }

    // Create array 'operate' with element: '+', '-', '/', '*'
    let operator = ['+', '-', '/', '*', '='];

    // Create variable 'keypad' as DOMElement with Selector all '.keypad button'
    let keypad = document.querySelectorAll('.keypad button');

    // For each 'key' in 'keypad'
    keypad.forEach((key) => {

        // when a key is clicked
        key.addEventListener('click', () => {

            clearDisplay()

            // if 'key' value is a number
            if (!isNaN(key.value)) {

                // then add 'key' value to 'memory' input
                memory['input'] += key.value;

                // 'displayResult' -> 'memory' input
                displayResult(memory['input']);

            }
            // else if 'key' value exist in operator
            else if (operator.indexOf(key.value) >= 0) {

                
                // then set 'memory' currentNum value to 'memory' input value 
                memory['currentNum'] = parseInt(memory['input'] || memory['result']);

                // then set 'memory' currentSign value to 'key' value
                memory['currentSign'] = key.value;

                // then set 'memory' result to value 'operate' ->  'memory' currentSign value if not equal to "="; else 'memory' previousSign, 'memory' previousNum, 'memory' currentNum; || 0
                memory['result'] = operate(
                    memory['currentSign'] == '=' ? memory['previousSign'] : memory['currentSign'],
                    memory['previousNum'],
                    memory['currentNum']
                ) || 0;

                // then set 'displayResult' -> 'memory' result
                displayResult(memory['result']);

                // then set 'memory' input to empty string
                memory['input'] = '';

                // then set 'memory' previousSign to 'memory' currentSign if it is not equal to '='
                if(memory['currentSign'] != '=' && memory['currentSign'] != ''){
                    memory['previousSign'] = memory['currentSign'];
                }
            }
            // else if 'key' value is "C"
            else if (key.value == "C"){

                // then 'clearDisplay'
                clearDisplay();

                // then 'memory' reset
                memory.reset();

                // End if
            }
            // then set 'memory' previousNum value to 'memory' result value
            memory['previousNum'] = memory['result'];

            // End when
            console.table({memory})
        })
        // End for   
    })

}

keypadPress()