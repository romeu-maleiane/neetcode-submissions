class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = []

    for(let i = 0; i < nums.length; i++){
        for(let n = i + 1; n < nums.length; n++ ){
            if( nums[i] + nums[n] == target){
                res.push(i, n)
            }
        }
    }

    return res
    }
}
