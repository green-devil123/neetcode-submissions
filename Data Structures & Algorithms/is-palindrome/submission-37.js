class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumberic(s, i){
        const code = s.charCodeAt(i);
        return (
            (code >= 97 && code <= 122) || // a-z
            (code >= 48 && code <= 57)     // 0-9
        );
    }
    isPalindrome(s) {
        let i=0, j=s.length-1;
        s= s.toLowerCase();
        while(i<j){
            while(i<j && !this.isAlphanumberic(s, i)){
                i++;
            }
            while(i<j && !this.isAlphanumberic(s, j)){
                j--;
            }
            if(s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}
// Was it a car or a cat I saw?
// i=, j=27

