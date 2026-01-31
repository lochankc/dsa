// Find the largest element in the Array.

let arr = [-2, 4, 2, 9, 45, 28, -3, -5];

function findLargest(arr) {
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    return largest;
}

// find smallest in the array.
function findSmallest(arr) {
    let smallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }

    return smallest;
}

// find the second largest in the array.
function findSecondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


// *
// * *
// * * *
// * * * *
// * * * * *
// Pattern

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + "* "
    }
    console.log(row)
}

// * * * * *
// * * * *
// * * *
// * *
// *
// Pattern

for (let i = 5; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + "* "
    }
    console.log(row)
}

// 1
// 12
// 123
// 1234
// 12345
//pattern

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j+1)
    }
    console.log(row)
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1)
    }
    console.log(row)
}

// 12345
// 1234
// 123
// 12
// 1

for (let i = 5; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + (j + 1)
    }
    console.log(row)
}

//     *
//    **
//   ***
//  ****
// *****
let n = 5
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i -1; j++) {
        row = row + " ";
    }
    for (let k = 0; k <= i; k++) {
        row = row + "*"
    }
    console.log(row)
}