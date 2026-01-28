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