class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res;

        for(let i = 0; i < nums.length; i++){
            for(let f = i + 1; f < nums.length;f++){
                if(nums[i] + nums[f] == target) res = [i,f]
            }
        }

        return res
    }
}
