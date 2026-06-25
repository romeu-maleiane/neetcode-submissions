class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashS = {}
        const hashT = {}

        if(s.length !== t.length) return false

        for(let i = 0; i < s.length; i++){
            hashS[s[i]] = 1 + (hashS[s[i]] || 0)
        }

        for(let i = 0; i < t.length; i++){
            hashT[t[i]] = 1 + (hashT[t[i]] || 0)
        }



        for(let key of s){
            if(hashS[key] !== hashT[key]) return false
        }

        return true
    }
}
