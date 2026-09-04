class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        let freq = Array.from({ length: nums.length + 1 }, () => []);
        let res = []

        for(let i = 0; i < nums.length + 1; i++){
            count[nums[i]] = (count[nums[i]] || 0) + 1
        }

        for(let i in count){
            freq[count[i]].push(i)
        }

        for(let i = nums.length; i > 0; i--){
            for(let n of freq[i]){
                res.push(n)
                if(res.length == k) return res
            }
        }

        console.log(count)
        console.log(freq)
        return res
    }
}
