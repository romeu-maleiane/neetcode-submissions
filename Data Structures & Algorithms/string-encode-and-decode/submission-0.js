class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = []

        for(let s of strs){
            let length = s.length
            res.push(String(length), '#', s)
        }

        return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []

        let i = 0
        while( i < str.length){
            let j = i
            while(str[j] !== '#'){
                j++
            }
            let length = Number(str.substring(i,j))
            i = j + 1
            j =  length + i
            res.push(str.substring(i,j))
            i = j
        }

        return res
    
    }
}
