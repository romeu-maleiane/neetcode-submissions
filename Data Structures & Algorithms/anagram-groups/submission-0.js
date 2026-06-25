class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = strs.map(str => str.split('').sort().join(''))
        let hashRes = {}

        for(let i = 0; i < sorted.length; i++){
            if(!hashRes[sorted[i]]){
                hashRes[sorted[i]] = [strs[i]]
            } else {
                hashRes[sorted[i]].push(strs[i])
            }
        }

        return Object.values(hashRes)
    }
}
