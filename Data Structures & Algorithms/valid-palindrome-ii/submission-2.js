class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char){
        return (char < 'Z') || (char > 'A') || (char > 'a') || (char < 'z') || (char > 0) || (char < 9)
    }

    validPalindrome(s) {
        let validString = ''

        for(let i = 0; i < s.length; i++){
            if(this.isAlphanumeric(s[i])) validString += s[i]
        }

        for(let i = 0; i < validString.length; i++){
            let tmp = validString.split('')
            tmp[i] = ''
            let a = tmp.join('')
            a.split('').reverse().join('')
            if(a == a.split('').reverse().join('')) return true
        }

        return false
        
    }
}
