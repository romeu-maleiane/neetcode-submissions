class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let shash = {}
        let thash = {}
        
        for(let char of s){
            shash[char] = (shash[char] || 0) + 1
        }

        for(let char of t){
            thash[char] = (thash[char] || 0) + 1
        }


        for(let tChar of t){
            if(shash[tChar] !== thash[tChar] ) return false
        }

        console.log(shash, thash)
        return true


    }
}
