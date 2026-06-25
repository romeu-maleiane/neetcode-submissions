class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrs = strs.map((str) => str.split('').sort().join(''))
        const hashStrs = {}

        for(let i = 0; i < strs.length; i++){
            hashStrs[sortedStrs[i]] = []
        }

        for(let i = 0; i < strs.length; i++){
            hashStrs[sortedStrs[i]] = [...hashStrs[sortedStrs[i]], strs[i]]
        }
        
       return Object.values(hashStrs)
    }
}
