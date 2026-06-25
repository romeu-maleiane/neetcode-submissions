class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = strs.map(str => str.split('').sort().join(''))
        const hashStrs = {}

        for(let i = 0; i < strs.length; i++){
            if(!hashStrs[sorted[i]]){
                hashStrs[sorted[i]] = [strs[i]]
            }
            else {
                hashStrs[sorted[i]].push(strs[i])
            }
        }

        return Object.values(hashStrs)
    }
}
