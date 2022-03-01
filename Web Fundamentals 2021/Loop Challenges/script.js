// challenge 1: prints odds up to the passed argument
function printOdds(x) {
    for (i = 1; i <= x; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
printOdds(20);

// challenge 2: logs values from 100 to 0 that are evenly divisible by 3 
for (i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// challenge 3: log all values in a given sequence(array)
var array = [4, 2.5, 1, -.05, -2, -3.5];

function logArray(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
logArray(array);

// challenge 4: sigma
function logSigma(x) {
    var sum = 0
    for (i = 1; i <= x; i++) {
        sum += i;
    }
    console.log(sum);
}
logSigma(100);

// challenge 5: Factorial
function logFactorial(x) {
    var product = 1;
    for (i = 1; i <= x; i++) {
        product *= i;
    }
    console.log(product);
}

logFactorial(12);