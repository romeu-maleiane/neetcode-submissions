class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let longest = ''

        for(let i = 0; i < strs[0].length; i++){
            let char = strs[0][i]

            for(let n = 1; n < strs.length; n++){
                if(strs[n].length <= i || strs[n][i] != char){
                    return longest
                }
            }
            longest += char
        }

        return longest
    }
}
