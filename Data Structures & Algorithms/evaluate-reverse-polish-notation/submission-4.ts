class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack:number[] = [];
        let b,a;
        for(let token of tokens){
            if(token !== "+" && token !== "-" && token !== "*" && token !== "/"){
                stack.push(Number(token));
            }else{
                switch(token){
                    case "+":
                        b = stack.pop();
                        a = stack.pop();
                        stack.push(a+b);
                        break;
                    case "-":
                        b = stack.pop();
                        a = stack.pop();
                        stack.push(a-b);
                        break;
                    case "*":
                        b = stack.pop();
                        a = stack.pop();
                        stack.push(a*b);
                        break;
                    case "/":
                        b = stack.pop();
                        a = stack.pop();
                        stack.push(Math.trunc(a/b));
                        break;
                }
            }
        }

        return stack.pop();
    }
}
