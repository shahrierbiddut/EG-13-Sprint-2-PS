/**
 * 1. Reverse a String
 *
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}


/**
 * 2. Find Maximum
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}


/**
 * 3. Check for Palindrome
 *
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


/**
 * 4. Sum Array Elements
 *
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    return sum;
}


/**
 * 5. Count Vowels
 *
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


/**
 * 6. Two Sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }

        seen.set(nums[i], i);
    }

    return [];
}


/**
 * 7. Flatten a Nested Array
 *
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}


/**
 * 8. Group Anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const groups = new Map();

    for (const word of strs) {
        const key = word.split("").sort().join("");

        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.get(key).push(word);
    }

    return Array.from(groups.values());
}


/**
 * 9. Longest Substring Without Repeating Characters
 *
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const seen = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }

        seen.set(char, right);

        const currentLength = right - left + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}


/**
 * 10. Deep Clone an Object
 *
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    const clonedObject = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObject[key] = deepClone(obj[key]);
        }
    }

    return clonedObject;
}