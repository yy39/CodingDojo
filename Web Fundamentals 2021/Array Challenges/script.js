// Challenge1
function alwaysHungry(arr) {
    var foodCount = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            foodCount++;
        }
    }
    if (foodCount == 0) {
        console.log("I'm hungry")
    } else {
        for (i = 0; i < foodCount; i++)
            console.log("yummy");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry" 

// Challenge2 
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9] 

// challenge 3
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0;
    console.log('Count: ' + count);
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log('Sum: ' + sum)
    }
    console.log('Average: ' + (sum / arr.length));
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > sum / arr.length) {
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// challenge 4
function reverse(arr) {
    var temp = 0;
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        temp = arr[i];
        console.log(arr[arr.length - 1 - i]);
        newArr.push(arr[arr.length - 1 - i]);
    }
    return newArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// challenge 5 fibonacci array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (i = 1; i < n - 1; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]