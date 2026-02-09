// Only LeetCode problems.

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
// Input value
// let nums = [0,1,2,2,3,0,4,2]

console.log(removeElement(nums, 2))

// Reverse String
// https://leetcode.com/problems/reverse-string/description/
function reverseString(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }

    return s;
}
// Input Value
// let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s))

// Best Time to Buy and Sell Stock.
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
function maxProfit(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i]
        }
    }

    return maxProfit
}
// inputValue
// let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));