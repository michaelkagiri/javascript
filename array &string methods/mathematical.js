// Factorial of a number
function factorial(n) {
    if (n < 0) {
        return "Undefined for negative numbers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacciSequence(terms) {
    if (terms <= 0) {
        return "Number of terms must be positive";
    } else if (terms === 1) {
        return [0];
    } else if (terms === 2) {
        return [0, 1];
    } else {
        let sequence = [0, 1];
        for (let i = 2; i < terms; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}
