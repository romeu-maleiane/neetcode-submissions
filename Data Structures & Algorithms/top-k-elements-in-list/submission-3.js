class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for(let i of nums){
            count[i] = (count[i] || 0) + 1
        }

        let freq = Array.from({ length: nums.length + 1 }, () => [])

        for(let i in count){
            freq[count[i]].push(i)
        }

        let res = []
        for(let i = nums.length; i > 0; i--){
            for(let n of freq[i]){
                res.push(n)
                if(res.length == k) return res
            }
        }
    }
}
