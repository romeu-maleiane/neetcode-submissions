class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const hashMajority = {}
        let majority = 0
        let res = 0

        for(let i = 0; i < nums.length; i++){
            hashMajority[nums[i]] = 1 + ( hashMajority[nums[i]] || 0 )

            if(hashMajority[nums[i]] > majority){
                majority = hashMajority[nums[i]]
                res = nums[i]
            } 
        }

        return res
    }
}
