class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const lengthOfNums = nums.length
        const res = Array(lengthOfNums).fill(1)

        for(let i = 1; i < lengthOfNums; i++){
            res[i] = res[i - 1] * nums[i - 1]
        }

        let postfix = 1
        for( let i = lengthOfNums - 1; i > -1; i--){
            res[i] *= postfix 
            postfix *= nums[i]
        }

        return res
    }
}
