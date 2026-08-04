class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for(const ch of tokens){
            if(ch !=='+' && ch !== '-' && ch !== "*" && ch !== "/"){
                stack.push(Number(ch));
            }else{
                const b = stack.pop();
                const a = stack.pop();
                switch(ch){
                    case "+" :
                        stack.push(a+b);
                        break;
                    case "-" :
                        stack.push(a-b);
                        break;
                    case "*" :
                        stack.push(b*a);
                        break;
                    case "/" :
                        stack.push(Math.trunc(a / b));
                        break;
                }
            }
        }
        return stack.pop();
    }
}
