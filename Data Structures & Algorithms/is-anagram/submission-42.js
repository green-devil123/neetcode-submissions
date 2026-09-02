class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const array = new Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            array[s.charCodeAt(i) - 97]++;
            array[t.charCodeAt(i) - 97]--;
        }
        for(const num of array){
            if(num !== 0) return false;
        }
        return true;
    }
}
