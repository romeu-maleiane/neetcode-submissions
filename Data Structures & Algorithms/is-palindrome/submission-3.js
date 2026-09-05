class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while(l < r){
            while(!this.alphanum(s[l]) && l < r){
                l++
            }
            while(!this.alphanum(s[r]) && r > l){
                r--
            }

            if(s[l].toLowerCase() == s[r].toLowerCase()){
                l++
                r--
            }
            else return false

        }
        return true
    }

    alphanum(c){
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        )
    }
}
