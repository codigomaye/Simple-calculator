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
    }

    return operation[operator] ?? 'Uknown operator';
}