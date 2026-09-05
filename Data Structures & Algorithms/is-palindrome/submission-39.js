class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumberic(s, i){
        const code = s.charCodeAt(i);
        if((code>=48 && code <=57) || 
        (code >= 97 && code <=122) || 
        (code >= 65 && code <=90)){
            return true;
        }
        return false;
    }
    isPalindrome(s) {
        let i=0, j=s.length-1;
        while(i<j){
            while(i<j && !this.isAlphanumberic(s, i)){
                i++;
            }
            while(i<j && !this.isAlphanumberic(s, j)){
                j--;
            }
            if(s[i].toLowerCase() !== s[j].toLowerCase()) 
            return false;

            i++;
            j--;
        }
        return true;
    }
}
// Was it a car or a cat I saw?
// i=, j=27

