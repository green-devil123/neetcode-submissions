class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const obj = {
            ")" :"(",
            "}" : "{",
            "]" : "["
        }
        let count = 0;
        let stack = [];
        for(const ch of s){
            if(ch === ")" || ch === "]" || ch === "}"){
                const newCh = obj[ch];
                if(stack[stack.length-1] === newCh) stack.pop();
                else return false;
            }else{
                stack.push(ch);
            }
        }
        return stack.length === 0
    }
}
