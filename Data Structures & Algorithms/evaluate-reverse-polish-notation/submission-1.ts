class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack:number[] = [];
        for(const token of tokens){
            if(token !== "+" && token !=="*" && token !== "-" && token !== "/"){
                stack.push(Number(token));
            }else{
                const b = stack.pop();
                const a = stack.pop();
                switch(token){
                    case "+":
                        stack.push(a+b);
                        break;
                    case "-":
                        stack.push(a-b);
                        break;
                    case "*":
                        stack.push(a*b);
                        break;
                    case "/":
                        stack.push(Math.trunc(a/b));
                        break;
                }
            }
        }
        return stack.pop();
    }
}
