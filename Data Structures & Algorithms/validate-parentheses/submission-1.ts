class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const bracket_obj = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }
        let stack:string[] = [];
        for(const ch of s){
            if(stack.length > 0 && 
            stack[stack.length -1] === bracket_obj[ch]){
                stack.pop();
            }else{
                stack.push(ch);
            }
        }
        return stack.length === 0;
    }
}
