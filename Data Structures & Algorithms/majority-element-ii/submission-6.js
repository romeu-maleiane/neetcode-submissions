class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let hashMajority = {}
        let res = []

        for(let i = 0; i < nums.length; i++){
            hashMajority[nums[i]] = 1 + (hashMajority[nums[i]] || 0)
        }

        for(let i = 0; i < nums.length; i++){
            if( hashMajority[nums[i]] > Math.floor(nums.length / 3) && !res.includes(nums[i])){
                res.push(nums[i])
            }
        }

        return res.sort((a,b) => b - a)
    }
}
