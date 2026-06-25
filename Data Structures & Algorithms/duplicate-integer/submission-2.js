class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashNums = {}

        for(let num of nums){
            hashNums[num] = 1 + (hashNums[num] || 0)
            if(hashNums[num] == 2) return true
        }

        return false
    }
}
