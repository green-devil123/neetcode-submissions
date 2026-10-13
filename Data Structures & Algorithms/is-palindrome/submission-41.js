class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(s){
        return (s.charCodeAt() >=97 && s.charCodeAt() <=122) ||        (s.charCodeAt() >=65 && s.charCodeAt() <=90) || 
        (s.charCodeAt() >=48 && s.charCodeAt() <=57) 
    }
    isPalindrome(s) {
        let i=0, j=s.length-1;
        while(i<j){
            while(i<j && !this.isAlphanumeric(s[i])){
                i++;
            }
            while(i<j && !this.isAlphanumeric(s[j])){
                j--;
            }
            if(s[i].toLowerCase() === s[j].toLowerCase()){
                i++;
                j--;
            }else{
                return false;
            }
        }
        return true;
    }
}
