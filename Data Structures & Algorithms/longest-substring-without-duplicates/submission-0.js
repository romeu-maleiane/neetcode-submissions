class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let sequence = new Set()
        let res = 0
        let l = 0

        for(let r = 0; r < s.length; r++){
            while(sequence.has(s[r])){
                sequence.delete(s[l])
                l++
            }

            sequence.add(s[r])
            res = Math.max(res, (r - l) + 1)
        }
        return res
    }
}
