class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char){
        return (char < 'Z') || (char > 'A') || (char > 'a') || (char < 'z') || (char > 0) || (char < 9)
    }

    validPalindrome(s) {
        let p = ''

        for(let i = 0; i < s.length; i++){
            if(this.isAlphanumeric(s[i])) p += s[i]
        }

        for(let i = 0; i < p.length; i++){
            let tmp = p.split('')
            tmp[i] = ''
            let a = tmp.join('')
            let s = a
            a.split('').reverse().join('')
            if(s == a.split('').reverse().join('')) return true
        }

        return false
        
    }
}
