class Solution {
    isAlphanumeric(s:string, i:number): boolean {
        const code = s.charCodeAt(i);

        return (
            (code >= 97 && code <= 122) || // a-z
            (code >= 48 && code <= 57)     // 0-9
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i=0, j=s.length-1;
        s = s.toLowerCase();
        while(i<j){
            while(i<j && !this.isAlphanumeric(s, i)) i++;
            while(i<j && !this.isAlphanumeric(s, j)) j--;

            if(s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}
