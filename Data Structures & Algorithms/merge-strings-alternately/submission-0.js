class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newString = ''
        let loop = Math.min(word1.length, word2.length)

        for(let i = 0; i < loop; i++){
            let mergedStrings = word1[i] + word2[i]
            newString += mergedStrings
        }
        let p = loop
        while(p < word2.length){
            newString += word2[p++]
        }
        while(p < word1.length){
            newString += word1[p++]
        }

        return newString
    }
}
