class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const obj = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        const stack:string[] = [];
        for(let i=0;i<s.length;i++){
            if(stack.length > 0 && stack[stack.length-1] === obj[s[i]]){
                stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
        console.log(stack)
        return stack.length === 0;
    }
}
