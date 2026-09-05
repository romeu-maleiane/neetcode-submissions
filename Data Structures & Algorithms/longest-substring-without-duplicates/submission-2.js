class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashSet = new Set()
        let l = 0;let r = 0
        let length = 0

        while(r < s.length){
            if(!hashSet.has(s[r])){
                hashSet.add(s[r])
                length = Math.max((r - l) + 1,length)
                r++
            } else {
                hashSet.delete(s[l])
                l++
            }
        }
        return length
    }
}
