class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for(let c of tokens){
            if(c == '+'){
                stack.push(stack.pop() + stack.pop())
            }
            else if(c == '-'){
                let [a, b] = [stack.pop(), stack.pop()]
                stack.push(b - a)
            }
            else if(c == '*'){
                stack.push(stack.pop() * stack.pop())
            }
            else if(c == '/'){
                let [a, b] = [stack.pop(), stack.pop()]
                stack.push(Math.trunc(b / a))
            }
            else stack.push(Number(c))
        }
        return stack[0]
    }
}
