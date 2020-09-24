function validateCreditNumber(cardNum) {
    let valid = false;
    let message;
    let uniqueNumbers = [];
    let sum = 0;

    for (let i = 0; i < cardNum.length; i++) {
        sum += Number(cardNum.charAt(i));

        if (uniqueNumbers.includes(cardNum.charAt(i))) {
            continue;
        }

        uniqueNumbers.push(cardNum.charAt(i));
    }

    if (cardNum.length !== 16) {
        // Input must be 16 characters
        message = "should contain 16 digits.";
    } else if (Number(cardNum) != cardNum) {
        // All characters must be numbers
        message = "should contain only numbers.";
    } else if (cardNum.substring(cardNum.length - 1) % 2 !== 0) {
        // The last number must be even
        message = "doesn't end with an even number.";
    } else if (sum <= 16) {
        // The sum of all the numbers must be greater than 16
        message = "must have a sum greater than 16.";
    } else if (uniqueNumbers.length < 2) {
        // At least two different numbers should be represented
        message = "must contain at least two different charecters.";
    } else {
        valid = true;
    }

    if (valid) {
        console.log(`Success! The input ${cardNum} is a valid credit card number.`);
    } else {
        console.log(`Invalid! The input ${cardNum} ${message}`);
    }
}

validateCreditNumber("213124213");
validateCreditNumber("7d8sad88g7sad88s");
validateCreditNumber("1237617628378211");
validateCreditNumber("0000000000000002");
validateCreditNumber("6666666666666666");
validateCreditNumber("5903990299304802");