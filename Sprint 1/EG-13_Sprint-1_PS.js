/**
 * 01. Check if a Year is a Leap Year
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * 02. Generate Fibonacci Sequence Up to N Terms
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

/**
 * 03. Calculate the Greatest Common Divisor (GCD) using Euclid's algorithm
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * 04. Calculate the Least Common Multiple (LCM) using GCD
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / findGCD(a, b);
}

/**
 * 05. Check if a Number is Prime
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * 06. Merge Two Sorted Arrays into One Sorted Array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

/**
 * 07. Find the Median of an Unsorted Array
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
    if (nums.length === 0) return 0;
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

/**
 * 08. Find the Second Largest Number in an Array (distinct elements)
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
    if (nums.length < 2) return null;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}

/**
 * 09. Find Most Frequent Element (Mode) in an Array
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
    if (arr.length === 0) return null;
    const frequency = {};
    let maxFreq = 0;
    let mode = arr[0];
    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxFreq) {
            maxFreq = frequency[item];
            mode = item;
        }
    }

    return mode;
}


// 10. Natural Sorting of Strings with Embedded Numbers
// Design a custom string array sorting function that handles natural numeric order inside strings (so "item2" comes before "item10").
// /**
//  * @param {string[]} arr
//  * @return {string[]}
//  */
function naturalSort(arr) {
    return [...arr].sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true })
    );
}