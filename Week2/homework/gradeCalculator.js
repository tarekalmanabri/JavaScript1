// this is the function we will call later to get the result
function calculator(score) {
    let grade
    if (score >= 90 && score <= 100) {
        grade = 'A'
    } else if (score => 80 && score <= 89) {
        grade = 'B'
    } else if (score => 70 && score <= 79) {
        grade = 'C'
    } else if (score => 60 && score <= 69) {
        grade = 'D'
    } else if (score => 50 && score <= 59) {
        grade = 'E'
    } else {
        grade = 'F'
    }
    // the template string that allows us put our variables directly inline into the string.
    return `You got a ${grade} (${score}%)!`;
}

console.log(calculator(91));