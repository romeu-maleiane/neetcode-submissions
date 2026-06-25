class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let sumEqualsToK = 0

        for(let i = 0; i < nums.length; i++){
            if(nums[i] == k) {
                sumEqualsToK++
            }
            let sum = nums[i]
            for(let n = i + 1 ;n < nums.length; n++){
                sum += nums[n] 
                if(sum == k) sumEqualsToK++
                else continue
            }

        } 

        return sumEqualsToK
    }
}
