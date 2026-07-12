class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i=0;
        let j = s.length-1;
        while(i<j){
            while(i < j && !this.isAlphanumeric(s[i])) i++;
            while(i < j && !this.isAlphanumeric(s[j])) j--;
            
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            
            i++;
            j--;
        } 
        return true;
    }

    isAlphanumeric(ch):boolean{
        const code = ch.toLowerCase().charCodeAt(0);
        if((code >=97 && code<=122 )|| (code >= 48 && code <= 57)){
            return true;
        }
        return false;
    }
}
