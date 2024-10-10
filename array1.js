// Problem 1: 
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log(squareNumbers([2, 3, 4, 5])); 


// Problem 2: 
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Test for Problem 2
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


// Problem 3: 
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Test for Problem 3
console.log(sumOfArray([5, 10, 15, 20])); 


// Problem 4: 
function sumOfSquaredEvens(arr) {
    return arr
        .filter(num => num % 2 === 0)    
        .map(num => num * num)           
        .reduce((sum, num) => sum + num, 0); 
}

// Test for Problem 4
console.log(sumOfSquaredEvens([1, 2, 3, 4, 5])); 