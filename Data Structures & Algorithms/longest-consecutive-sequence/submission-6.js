class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums)
        let longest = 0

        console.log(numsSet)
        for(let n of numsSet){
            if(!numsSet.has(n - 1)){
                let length = 0
                while(numsSet.has(n + length)){
                    length += 1
                }
                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
