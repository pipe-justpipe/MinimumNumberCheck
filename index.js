// my function checks for the minimum of two numbers
function checkMinimum(a, b) {
    if (a < b) {
        return `${a} is the minimum of the two numbers ${a} and ${b}`;
    } else if (a > b) {
        return `${b} is the minimum of the two numbers ${a} and ${b}`;
    } else {
        return `${a} and ${b} are equal`;
    }
}

console.log(checkMinimum(5, 11));
console.log(checkMinimum(71, 0.5));
console.log(checkMinimum(7, 7));
console.log(checkMinimum(4, 8));


