class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let res = 0
        let l = 0
        let r = 0

        while(r < s.length){
            count[s[r]] = (count[s[r]] || 0) + 1

            if(((r - l) + 1) - Math.max(...Object.values(count))> k){
                count[s[l]] -= 1
                l++
            }
            res = Math.max(res,((r - l) + 1))
            r++
        }

        return res
    }
}
