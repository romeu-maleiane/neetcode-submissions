class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let hash = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for(let c of s){
            if(hash[c]){
                if(stack.length !== 0 && stack[stack.length - 1] == hash[c]){
                    stack.pop()
                }
                else return false
            } 
            else stack.push(c)

        }
        
        return stack.length == 0 ? true : false
    }
}
