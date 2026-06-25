class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let res = 1

        for(let i = 0; i < nums.length + 1; i++){
            if(!nums.includes(res)) {
                return res
            } else {
                res++
            }
        }

        return nums.length
    }
}
