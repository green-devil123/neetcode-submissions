class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch:string):boolean{
        const code = ch.toLowerCase().charCodeAt(0);
        return ((code>=97 && code <=122) || (code>=48 && code <=57));
    }
    isPalindrome(s: string): boolean {
        let i=0, j= s.length-1;
        while(i<j){
            while(i<j && !this.isAlphaNumeric(s[i]))i++;
            while(i<j && !this.isAlphaNumeric(s[j]))j--;
            if(s[i].toLowerCase() !== s[j].toLowerCase())
            return false;
            i++;
            j--;
          
        }
        return true;
    }
}
