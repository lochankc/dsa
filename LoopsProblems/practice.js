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

// 1
// 10
// 101
// 1010
// 10101

for (let i = 0; i < 5; i++) {
    let row = "";
    let print = 1;
    for (let j = 0; j <= i; j++) {
        if (print === 1) {
            row = row + print;
            print = 0
        } else {
            row = row + print;
            print = 1
        }
    } 
    console.log(row)
}

// 1
// 01
// 010
// 1010
// 10101

let print = 1;
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        if (print === 1) {
            row = row + print;
            print = 0
        } else {
            row = row + print;
            print = 1
        }
    } 
    console.log(row)
}

// countDigit: it is basically a number
// n is 259 and count is 3
function countDigit(n) {
    let count = 0;
    let val = n;

    while (val > 0) {
        val = Math.floor(val / 10);
        count++;
    }

    return count;
}

console.log(countDigit(259))

// isPalindrome or not, here the input value is integer

function isPalindrome(x) {
    let rev = 0;
    let val = x;

    if (x < 0) {
        return false;
    }

    while (val > 0) {
        const last = val % 10;
        rev = rev * 10 + last;
        val = Math.floor(val / 10);
    }

    return rev === x
}

console.log(isPalindrome(121))

// reverse an integer

function reverseInteger(n) {
    let val = Math.abs(n);
    let rev = 0;
    while (val > 0) {
        const last = val % 10;
        rev = rev * 10 + last
        val = Math.floor(val / 10);
    }
    return n < 0 ? -rev : rev;
}

console.log(reverseInteger(123))

// remove duplicates
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
function removeDuplicate(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i]
        }
    }

    return x + 1;
}
// input values
// let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicate(nums))

// Remove element
// https://leetcode.com/problems/remove-element/description/
function removeElement(nums, val) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }

    return x;
}
// Input valur
// let nums = [0,1,2,2,3,0,4,2]

console.log(removeElement(nums, 2))