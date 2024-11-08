////Revers a string///
function reverseString(str) {
    return str.split('').reverse().join('');
}
///Count Characters
function countCharacters(str) {
    return str.length;
}
///Capitalised word
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


///ARRAY FUNCTIONS

///Find Maximum And Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
///Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
///Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

///MATHEMATICAL FUNCTION

///Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
///Prince Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
///Fibonacci Sequence
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
