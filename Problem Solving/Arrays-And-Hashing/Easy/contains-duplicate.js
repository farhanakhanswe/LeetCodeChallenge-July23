/* Question link: https://leetcode.com/problems/contains-duplicate/ */

/* Brute Force Solution :
   Time Complexity -> O(n^2) and
   Space Complexity -> O(1)
*/

var containsDuplicate = function (nums) {

    for (let i = 0; i < nums.length; i++) {

        let firstNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let secondNum = nums[j];

            if (firstNum === secondNum) {
                return true;
            }
        }
    }

    return false;
};

/* Optimized Solution : 
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

var containsDuplicate = function (nums) {

    let numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            return true;
        }

        numsMap.set(nums[i], i);
    }

    return false;
};
